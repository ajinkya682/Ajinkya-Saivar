const { Worker } = require("bullmq");
const { getRedisConnection } = require("./redisConnection");
const { sendClientThankYou, sendOwnerNotification } = require("../services/emailService");
const Contact = require("../models/Contact");

let worker = null;

/**
 * Start the BullMQ email worker.
 * This processes jobs from the "contact-emails" queue.
 * Call this once at server startup.
 */
function startEmailWorker() {
  if (worker) return worker;

  worker = new Worker(
    "contact-emails",
    async (job) => {
      const { name, email, subject, message } = job.data;
      const contactId = job.id; // same as MongoDB _id

      console.log(`📧 Processing email job [${contactId}] for ${email}`);

      // Send both emails concurrently
      const [clientResult, ownerResult] = await Promise.allSettled([
        sendClientThankYou({ name, email, subject }),
        sendOwnerNotification({ name, email, subject, message }),
      ]);

      // Log individual results
      if (clientResult.status === "rejected") {
        console.error(`  ↳ ❌ Thank-you email to ${email} failed:`, clientResult.reason?.message);
      } else {
        console.log(`  ↳ ✅ Thank-you email sent to ${email}`);
      }

      if (ownerResult.status === "rejected") {
        console.error(`  ↳ ❌ Owner notification failed:`, ownerResult.reason?.message);
      } else {
        console.log(`  ↳ ✅ Owner notification sent`);
      }

      // If both failed, throw so BullMQ retries the whole job
      if (clientResult.status === "rejected" && ownerResult.status === "rejected") {
        throw new Error("Both emails failed to send");
      }

      // Update DB status to "sent"
      await Contact.findByIdAndUpdate(contactId, {
        status: "sent",
        sentAt: new Date(),
      });

      console.log(`  ↳ 📝 Contact [${contactId}] marked as sent`);
    },
    {
      connection: getRedisConnection(),
      concurrency: 2, // process up to 2 email jobs at once
    }
  );

  // ─── Worker Events ───────────────────────────────────────────
  worker.on("completed", (job) => {
    console.log(`✅ Email job [${job.id}] completed successfully`);
  });

  worker.on("failed", async (job, err) => {
    console.error(`❌ Email job [${job?.id}] failed after all retries:`, err.message);
    // Mark as failed in DB so you can inspect/retry manually
    if (job?.id) {
      try {
        await Contact.findByIdAndUpdate(job.id, { status: "failed" });
      } catch (dbErr) {
        console.error("Failed to update contact status to failed:", dbErr.message);
      }
    }
  });

  worker.on("error", (err) => {
    console.error("❌ Worker error:", err.message);
  });

  console.log("⚙️  Email worker started — listening for jobs");
  return worker;
}

module.exports = { startEmailWorker };
