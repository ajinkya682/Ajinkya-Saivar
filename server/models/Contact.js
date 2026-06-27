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
    // Track email delivery status
    status: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },
    // BullMQ job reference
    jobId: {
      type: String,
      default: null,
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

// Index for querying by status (useful for monitoring pending/failed jobs)
contactSchema.index({ status: 1 });
contactSchema.index({ email: 1, createdAt: -1 });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
