const { Resend } = require("resend");
const PQueue = require("p-queue").default;

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory email queue — max 2 concurrent sends
const emailQueue = new PQueue({ concurrency: 2 });

/**
 * Sends a thank-you email to the contact form submitter
 */
async function sendClientThankYou({ name, email, subject }) {
  return resend.emails.send({
    from: "Ajinkya Saivar <noreply@ajinkya.dev>",
    to: [email],
    subject: "Thank you for reaching out! 🙌",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for reaching out</title>
      </head>
      <body style="margin:0;padding:0;background:#f8fafc;font-family:'Inter',system-ui,sans-serif;">
        <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg,#1a4d8f,#3b82f6);padding:40px 40px 36px;">
            <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:800;letter-spacing:-0.04em;">
              <span style="opacity:0.7">A</span>S
            </h1>
          </div>

          <!-- Body -->
          <div style="padding:40px;">
            <h2 style="margin:0 0 16px;color:#0f172a;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
              Hey ${name}, thank you for reaching out! 👋
            </h2>
            <p style="margin:0 0 16px;color:#64748b;font-size:16px;line-height:1.75;">
              I've received your message about <strong style="color:#0f172a;">"${subject}"</strong> and I truly appreciate you taking the time to get in touch.
            </p>
            <p style="margin:0 0 16px;color:#64748b;font-size:16px;line-height:1.75;">
              I'm reviewing your inquiry and will get back to you within <strong style="color:#0f172a;">24–48 hours</strong> with a thoughtful response tailored to your needs.
            </p>
            <p style="margin:0 0 32px;color:#64748b;font-size:16px;line-height:1.75;">
              In the meantime, feel free to explore my projects or connect with me on LinkedIn.
            </p>

            <!-- Links -->
            <div style="background:#f8fafc;border-radius:10px;padding:20px;border:1px solid #e2e8f0;margin-bottom:32px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;">Quick Links</p>
              <a href="https://ajinkya.dev/projects" style="display:block;color:#1a4d8f;font-size:14px;font-weight:500;text-decoration:none;margin-bottom:8px;">→ View My Projects</a>
              <a href="https://github.com/ajinkya-saivar" style="display:block;color:#1a4d8f;font-size:14px;font-weight:500;text-decoration:none;margin-bottom:8px;">→ GitHub Profile</a>
              <a href="https://linkedin.com/in/ajinkya-saivar" style="display:block;color:#1a4d8f;font-size:14px;font-weight:500;text-decoration:none;">→ LinkedIn Profile</a>
            </div>

            <p style="margin:0;color:#94a3b8;font-size:14px;line-height:1.7;">
              Best regards,<br>
              <strong style="color:#0f172a;">Ajinkya Saivar</strong><br>
              Full-Stack Developer · MERN Stack
            </p>
          </div>

          <!-- Footer -->
          <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 40px;">
            <p style="margin:0;color:#94a3b8;font-size:12px;">
              This is an automated confirmation. Please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  });
}

/**
 * Sends a notification to Ajinkya with the contact form details
 */
async function sendOwnerNotification({ name, email, subject, message }) {
  return resend.emails.send({
    from: "Portfolio Contact <noreply@ajinkya.dev>",
    to: ["ajinkyasaivar66@gmail.com"],
    subject: `📬 New Contact: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8"></head>
      <body style="margin:0;padding:0;background:#09090b;font-family:'Inter',system-ui,sans-serif;">
        <div style="max-width:560px;margin:40px auto;background:#111827;border-radius:16px;border:1px solid #27272a;overflow:hidden;">
          
          <div style="background:linear-gradient(135deg,#1a4d8f,#3b82f6);padding:24px 32px;">
            <h1 style="margin:0;color:#fff;font-size:18px;font-weight:700;">📬 New Portfolio Contact</h1>
          </div>

          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #27272a;color:#94a3b8;font-size:13px;width:100px;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #27272a;color:#f8fafc;font-size:15px;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #27272a;color:#94a3b8;font-size:13px;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #27272a;">
                  <a href="mailto:${email}" style="color:#3b82f6;font-size:15px;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #27272a;color:#94a3b8;font-size:13px;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Subject</td>
                <td style="padding:10px 0;border-bottom:1px solid #27272a;color:#f8fafc;font-size:15px;">${subject}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#94a3b8;font-size:13px;vertical-align:top;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Message</td>
                <td style="padding:10px 0;color:#f8fafc;font-size:15px;line-height:1.75;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>

            <div style="margin-top:28px;padding:16px;background:#1f2937;border-radius:10px;border:1px solid #374151;">
              <p style="margin:0;color:#94a3b8;font-size:12px;">
                Received at: <strong style="color:#f8fafc;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</strong>
              </p>
            </div>

            <div style="margin-top:20px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;background:#3b82f6;color:#fff;padding:12px 24px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none;">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  });
}

/**
 * Queue both emails to be sent concurrently
 */
async function queueContactEmails(formData) {
  const results = await Promise.allSettled([
    emailQueue.add(() => sendClientThankYou(formData)),
    emailQueue.add(() => sendOwnerNotification(formData)),
  ]);

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length > 0) {
    console.error("Email send errors:", failed.map((f) => f.reason));
  }

  return {
    success: results.filter((r) => r.status === "fulfilled").length,
    failed: failed.length,
  };
}

module.exports = { queueContactEmails };
