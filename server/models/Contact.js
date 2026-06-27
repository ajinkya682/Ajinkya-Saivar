const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    // Email delivery status — managed by the MongoDB poller
    status: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },
    // How many times the poller has tried to send (max 3)
    retryCount: {
      type: Number,
      default: 0,
    },
    // When emails were successfully sent
    sentAt: {
      type: Date,
      default: null,
    },
    // IP address for abuse tracking
    ip: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Index for the poller query (finds pending with retries left)
contactSchema.index({ status: 1, retryCount: 1 });
contactSchema.index({ email: 1, createdAt: -1 });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
