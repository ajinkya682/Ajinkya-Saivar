const { Queue } = require("bullmq");
const { getRedisConnection } = require("./redisConnection");

let contactEmailQueue = null;

/**
 * Get or create the BullMQ Queue instance (singleton)
 */
function getEmailQueue() {
  if (!contactEmailQueue) {
    contactEmailQueue = new Queue("contact-emails", {
      connection: getRedisConnection(),
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: "exponential",
          delay: 5000, // 5s → 10s → 20s
        },
        removeOnComplete: { count: 100 }, // keep last 100 completed jobs for observability
        removeOnFail: { count: 50 },      // keep last 50 failed jobs for debugging
      },
    });

    contactEmailQueue.on("error", (err) => {
      console.error("❌ Email queue error:", err.message);
    });
  }
  return contactEmailQueue;
}

/**
 * Add a contact email job to the queue.
 * Uses contactId as the jobId to prevent duplicate sends.
 * BullMQ will skip adding if a job with the same ID already exists.
 *
 * @param {string} contactId - MongoDB _id of the Contact document
 * @param {object} formData  - { name, email, subject, message }
 * @returns {Promise<Job>}
 */
async function addEmailJob(contactId, formData) {
  const queue = getEmailQueue();
  const job = await queue.add("send-contact-emails", formData, {
    jobId: contactId, // ensures exactly-once delivery per contact submission
  });
  return job;
}

module.exports = { getEmailQueue, addEmailJob };
