const express = require("express");
const router = express.Router();
const { queueContactEmails } = require("../services/emailService");

// Simple validation
function validateContactForm({ name, email, subject, message }) {
  const errors = [];
  if (!name?.trim() || name.trim().length < 2) errors.push("Name must be at least 2 characters.");
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("A valid email address is required.");
  if (!subject?.trim() || subject.trim().length < 3) errors.push("Subject must be at least 3 characters.");
  if (!message?.trim() || message.trim().length < 10) errors.push("Message must be at least 10 characters.");
  return errors;
}

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate
  const errors = validateContactForm({ name, email, subject, message });
  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors[0] });
  }

  try {
    const result = await queueContactEmails({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    console.log(`✉️  Contact form processed: ${result.success} sent, ${result.failed} failed`);

    return res.status(200).json({
      success: true,
      message: "Message received! You'll get a confirmation email shortly.",
    });
  } catch (err) {
    console.error("Contact route error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong on our end. Please try emailing directly at ajinkyasaivar66@gmail.com",
    });
  }
});

module.exports = router;
