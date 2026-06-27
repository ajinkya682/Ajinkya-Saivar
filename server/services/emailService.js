const nodemailer = require("nodemailer");
const dns = require("dns");

// Fix for Node.js >= 17 where IPv6 is preferred by default but might be unsupported by the network (e.g. Render)
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder("ipv4first");
}

// ─── Nodemailer Transporter ──────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const SENDER_EMAIL = process.env.GMAIL_USER;
const OWNER_EMAIL = "ajinkyasaivar66@gmail.com";

/**
 * Sends a thank-you email to the contact form submitter
 */
async function sendClientThankYou({ name, email, subject }) {
  return transporter.sendMail({
    from: `"Ajinkya Saivar" <${SENDER_EMAIL}>`,
    to: email,
    subject: `Message received — ${subject}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message received</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
      </head>
      <body style="margin:0;padding:0;background:#FAF8F4;font-family:'Inter',system-ui,sans-serif;">

        <div style="max-width:560px;margin:48px auto;background:#ffffff;border:1px solid #E8E2D9;border-radius:4px;overflow:hidden;">

          <!-- Header -->
          <div style="background:#0D0D0D;padding:36px 48px;">
            <p style="margin:0;font-family:'Playfair Display',Georgia,serif;font-weight:900;font-size:26px;color:#E8C96A;letter-spacing:-0.01em;">AS</p>
          </div>

          <!-- Body -->
          <div style="padding:48px;">

            <!-- Accent bar -->
            <div style="width:40px;height:3px;background:#D4622A;margin-bottom:28px;"></div>

            <h2 style="margin:0 0 20px;font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:24px;color:#0D0D0D;line-height:1.3;letter-spacing:-0.02em;">
              Thank you for reaching out, ${name}.
            </h2>

            <p style="margin:0 0 16px;font-size:15px;color:#2A2A2A;line-height:1.8;">
              Your message regarding <strong style="color:#0D0D0D;font-weight:600;">${subject}</strong> has been received. I appreciate you taking the time to get in touch.
            </p>

            <p style="margin:0 0 16px;font-size:15px;color:#2A2A2A;line-height:1.8;">
              I am reviewing your inquiry and will respond within <strong style="color:#0D0D0D;font-weight:600;">24 to 48 hours</strong> with a considered reply tailored to your needs.
            </p>

            <p style="margin:0 0 36px;font-size:15px;color:#2A2A2A;line-height:1.8;">
              In the meantime, you are welcome to explore my work below.
            </p>

            <!-- CTA -->
            <a href="https://github.com/ajinkya682"
               style="display:inline-block;background:#D4622A;color:#ffffff;font-family:'Inter',system-ui,sans-serif;font-size:14px;font-weight:600;padding:14px 28px;text-decoration:none;border-radius:3px;letter-spacing:0.01em;margin-bottom:40px;">
              View My Work
            </a>

            <!-- Divider -->
            <hr style="border:none;border-top:1px solid #E8E2D9;margin:0 0 32px;">

            <!-- Quick Links -->
            <div style="background:#FAF8F4;border:1px solid #E8E2D9;border-radius:4px;padding:24px 28px;margin-bottom:36px;">
              <p style="margin:0 0 14px;font-size:11px;font-weight:600;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.1em;">Quick Links</p>
              <a href="https://github.com/ajinkya682"
                 style="display:block;font-size:14px;font-weight:500;color:#D4622A;text-decoration:none;margin-bottom:10px;">
                GitHub &raquo;
              </a>
              <a href="https://www.linkedin.com/in/ajinkya-saivar"
                 style="display:block;font-size:14px;font-weight:500;color:#D4622A;text-decoration:none;margin-bottom:10px;">
                LinkedIn &raquo;
              </a>
              <a href="https://x.com/Ajinkya_Saivar"
                 style="display:block;font-size:14px;font-weight:500;color:#D4622A;text-decoration:none;">
                Twitter / X &raquo;
              </a>
            </div>

            <!-- Signature -->
            <p style="margin:0;font-size:14px;color:#6B6B6B;line-height:1.75;">
              Best regards,<br>
              <strong style="color:#0D0D0D;font-weight:600;">Ajinkya Saivar</strong><br>
              Full-Stack Developer &middot; MERN Stack
            </p>

          </div>

          <!-- Footer -->
          <div style="background:#FAF8F4;border-top:1px solid #E8E2D9;padding:18px 48px;">
            <p style="margin:0;font-size:12px;color:#6B6B6B;">
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
  return transporter.sendMail({
    from: `"Portfolio Contact" <${SENDER_EMAIL}>`,
    to: OWNER_EMAIL,
    replyTo: email,
    subject: `New contact: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New contact received</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
      </head>
      <body style="margin:0;padding:0;background:#FAF8F4;font-family:'Inter',system-ui,sans-serif;">

        <div style="max-width:560px;margin:48px auto;background:#ffffff;border:1px solid #E8E2D9;border-radius:4px;overflow:hidden;">

          <!-- Header -->
          <div style="background:#0D0D0D;padding:28px 40px;display:flex;align-items:center;">
            <h1 style="margin:0;font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:18px;color:#ffffff;flex:1;">
              New Contact Received
            </h1>
            <span style="background:#F5E6C8;color:#D4622A;font-size:11px;font-weight:600;padding:4px 12px;border-radius:3px;letter-spacing:0.08em;text-transform:uppercase;">
              Portfolio
            </span>
          </div>

          <!-- Body -->
          <div style="padding:40px;">

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #E8E2D9;vertical-align:top;width:90px;font-size:11px;font-weight:600;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.08em;">
                  Name
                </td>
                <td style="padding:14px 0;border-bottom:1px solid #E8E2D9;font-size:14px;font-weight:500;color:#0D0D0D;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #E8E2D9;vertical-align:top;font-size:11px;font-weight:600;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.08em;">
                  Email
                </td>
                <td style="padding:14px 0;border-bottom:1px solid #E8E2D9;">
                  <a href="mailto:${email}"
                     style="font-size:14px;font-weight:500;color:#D4622A;text-decoration:none;">
                    ${email}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #E8E2D9;vertical-align:top;font-size:11px;font-weight:600;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.08em;">
                  Subject
                </td>
                <td style="padding:14px 0;border-bottom:1px solid #E8E2D9;font-size:14px;font-weight:500;color:#0D0D0D;">
                  ${subject}
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;vertical-align:top;font-size:11px;font-weight:600;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.08em;">
                  Message
                </td>
                <td style="padding:14px 0;font-size:14px;color:#2A2A2A;line-height:1.75;">
                  ${message.replace(/\n/g, "<br>")}
                </td>
              </tr>
            </table>

            <!-- Meta -->
            <div style="background:#FAF8F4;border:1px solid #E8E2D9;border-radius:3px;padding:14px 18px;margin:28px 0 24px;">
              <p style="margin:0;font-size:12px;color:#6B6B6B;">
                Received at: <strong style="color:#0D0D0D;font-weight:600;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</strong>
              </p>
            </div>

            <!-- CTA -->
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}"
               style="display:inline-block;background:#D4622A;color:#ffffff;font-family:'Inter',system-ui,sans-serif;font-size:14px;font-weight:600;padding:13px 26px;text-decoration:none;border-radius:3px;letter-spacing:0.01em;">
              Reply to ${name}
            </a>

          </div>

          <!-- Footer -->
          <div style="background:#FAF8F4;border-top:1px solid #E8E2D9;padding:16px 40px;">
            <p style="margin:0;font-size:12px;color:#6B6B6B;">
              Sent via your portfolio contact form. Hit Reply to respond directly.
            </p>
          </div>

        </div>

      </body>
      </html>
    `,
  });
}

module.exports = { sendClientThankYou, sendOwnerNotification };