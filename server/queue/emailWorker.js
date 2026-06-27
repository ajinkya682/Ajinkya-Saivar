const { sendClientThankYou, sendOwnerNotification } = require("../services/emailService");
const Contact = require("../models/Contact");

const POLL_INTERVAL_MS = 5000;  // check every 5 seconds
const MAX_RETRIES = 3;

let pollerTimer = null;
let isProcessing = false;

/**
 * Processes all pending contact emails.
 * Uses MongoDB as the queue — no Redis required.
 * - Finds contacts with status "pending" and retryCount < MAX_RETRIES
 * - Sends both emails concurrently
 * - Updates status to "sent" or increments retryCount on failure
 */
async function processPendingEmails() {
  if (isProcessing) return; // prevent overlapping runs
  isProcessing = true;

  try {
    // Find all pending contacts (or previously failed ones that still have retries left)
    const pending = await Contact.find({
      status: "pending",
      retryCount: { $lt: MAX_RETRIES },
    }).limit(10);

    if (pending.length === 0) {
      isProcessing = false;
      return;
    }

    console.log(`⚙️  Processing ${pending.length} pending email(s)...`);

    for (const contact of pending) {
      try {
        const [clientResult, ownerResult] = await Promise.allSettled([
          sendClientThankYou({
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
          }),
          sendOwnerNotification({
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message,
          }),
        ]);

        const clientOk = clientResult.status === "fulfilled";
        const ownerOk = ownerResult.status === "fulfilled";

        if (!clientOk) {
          console.error(`  ↳ ❌ Thank-you to ${contact.email}:`, clientResult.reason?.message);
        } else {
          console.log(`  ↳ ✅ Thank-you sent to ${contact.email}`);
        }

        if (!ownerOk) {
          console.error(`  ↳ ❌ Owner notification failed:`, ownerResult.reason?.message);
        } else {
          console.log(`  ↳ ✅ Owner notification sent`);
        }

        if (clientOk || ownerOk) {
          // At least one email sent — mark as sent
          await Contact.findByIdAndUpdate(contact._id, {
            status: "sent",
            sentAt: new Date(),
          });
          console.log(`  ↳ 📝 [${contact._id}] marked as sent`);
        } else {
          // Both failed — increment retry count
          const newRetryCount = (contact.retryCount || 0) + 1;
          const isFailed = newRetryCount >= MAX_RETRIES;
          await Contact.findByIdAndUpdate(contact._id, {
            retryCount: newRetryCount,
            status: isFailed ? "failed" : "pending",
          });
          if (isFailed) {
            console.error(`  ↳ ❌ [${contact._id}] exhausted retries — marked as failed`);
          } else {
            console.warn(`  ↳ ⚠️ [${contact._id}] retry ${newRetryCount}/${MAX_RETRIES}`);
          }
        }
      } catch (err) {
        console.error(`  ↳ ❌ Unexpected error for [${contact._id}]:`, err.message);
        const newRetryCount = (contact.retryCount || 0) + 1;
        await Contact.findByIdAndUpdate(contact._id, {
          retryCount: newRetryCount,
          status: newRetryCount >= MAX_RETRIES ? "failed" : "pending",
        });
      }
    }
  } catch (err) {
    console.error("❌ Email poller error:", err.message);
  } finally {
    isProcessing = false;
  }
}

/**
 * Start the email poller.
 * Polls MongoDB every POLL_INTERVAL_MS for pending contacts.
 */
function startEmailWorker() {
  if (pollerTimer) return;

  console.log(`⚙️  Email poller started — checking every ${POLL_INTERVAL_MS / 1000}s`);

  // Run immediately on startup (catches any pending from previous runs)
  processPendingEmails();

  // Then poll on interval
  pollerTimer = setInterval(processPendingEmails, POLL_INTERVAL_MS);
}

/**
 * Stop the poller gracefully (for tests / clean shutdown)
 */
function stopEmailWorker() {
  if (pollerTimer) {
    clearInterval(pollerTimer);
    pollerTimer = null;
    console.log("⚙️  Email poller stopped");
  }
}

module.exports = { startEmailWorker, stopEmailWorker };
