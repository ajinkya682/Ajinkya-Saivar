const IORedis = require("ioredis");

let redisConnection = null;

/**
 * Returns a shared IORedis connection used by BullMQ Queue and Worker.
 * Upstash Redis requires TLS — the REDIS_URL from Upstash starts with rediss://
 */
function getRedisConnection() {
  if (!redisConnection) {
    const url = process.env.REDIS_URL;
    if (!url) {
      throw new Error("REDIS_URL is not defined in environment variables.");
    }

    redisConnection = new IORedis(url, {
      maxRetriesPerRequest: null, // required by BullMQ
      enableReadyCheck: false,    // required by BullMQ with some Redis providers
      tls: url.startsWith("rediss://") ? {} : undefined, // TLS for Upstash
    });

    redisConnection.on("connect", () => console.log("✅ Redis connected successfully"));
    redisConnection.on("error", (err) => console.error("❌ Redis error:", err.message));
  }
  return redisConnection;
}

module.exports = { getRedisConnection };
