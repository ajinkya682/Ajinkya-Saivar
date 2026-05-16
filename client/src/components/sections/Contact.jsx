import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import Button from "../ui/Button";
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactMethods = [
  { icon: Mail, label: "Email", value: "ajinkyasaivar66@gmail.com", href: "mailto:ajinkyasaivar66@gmail.com", color: "#ef4444" },
  { icon: Linkedin, label: "LinkedIn", value: "ajinkya-saivar", href: "https://linkedin.com/in/ajinkya-saivar", color: "#0077b5" },
  { icon: Github, label: "GitHub", value: "ajinkya-saivar", href: "https://github.com/ajinkya-saivar", color: "var(--text)" },
  { icon: Twitter, label: "Twitter / X", value: "@ajinkya_saivar", href: "https://twitter.com/ajinkya_saivar", color: "#1da1f2" },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong. Please try again.");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" ref={ref} style={{ background: "var(--bg)" }}>
      <div className="container">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Amazing Together."
          description="Whether you have an internship opportunity, a freelance project, or just want to connect — I'd love to hear from you."
          center
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "56px", alignItems: "start" }} className="contact-grid">

          {/* Left — Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "24px" }}>
              Contact Info
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {contactMethods.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className="card"
                    style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px" }}
                  >
                    <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: `${color}1a`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "12px", color: "var(--secondary)", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "500" }}>{label}</p>
                      <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--text)", margin: "2px 0 0" }}>{value}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="card"
            style={{ padding: "36px" }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "24px" }}>
              Send a Message
            </h3>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "48px 24px" }}
                >
                  <CheckCircle size={56} style={{ color: "#10b981", margin: "0 auto 16px", display: "block" }} />
                  <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "8px" }}>
                    Message Sent!
                  </h4>
                  <p style={{ fontSize: "14px", color: "var(--secondary)", lineHeight: "1.7" }}>
                    Thank you for reaching out! I've received your message and will get back to you shortly. You should also receive a confirmation email.
                  </p>
                  <Button variant="ghost" size="sm" onClick={() => setStatus("idle")} style={{ marginTop: "20px" }}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Name</label>
                      <input id="contact-name" className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Ajinkya Saivar" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email</label>
                      <input id="contact-email" className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" className="form-input" name="subject" value={form.subject} onChange={handleChange} placeholder="Internship Opportunity / Freelance Project" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." required />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "var(--radius-md)" }}
                    >
                      <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0 }} />
                      <p style={{ fontSize: "13px", color: "#ef4444", margin: 0 }}>{errorMsg}</p>
                    </motion.div>
                  )}

                  <Button type="submit" variant="primary" size="lg" loading={status === "loading"} icon={<Send size={16} />} style={{ width: "100%", justifyContent: "center" }}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
