import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "../components/ui/SocialIcons";
import Button from "../components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong. Please try again.");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <div style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh", background: "var(--bg)" }}>
      <section style={{ padding: "72px 0" }}>
        <div className="container">
          
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px" }}>
            
            {/* Left Side: Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              <h1 style={{ fontSize: "48px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.03em", marginBottom: "16px", lineHeight: "1.1" }}>
                Let's start a <br /><span style={{ color: "var(--primary)" }}>project together</span>
              </h1>
              <p style={{ fontSize: "16px", color: "var(--secondary)", lineHeight: "1.7", marginBottom: "40px", maxWidth: "90%" }}>
                I'm currently available for full-time opportunities and freelance projects. 
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 4px" }}>Email</p>
                    <a href="mailto:ajinkyasaivar66@gmail.com" style={{ fontSize: "16px", fontWeight: "600", color: "var(--text)", textDecoration: "none" }}>ajinkyasaivar66@gmail.com</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 4px" }}>Phone</p>
                    <a href="tel:+919657459908" style={{ fontSize: "16px", fontWeight: "600", color: "var(--text)", textDecoration: "none" }}>+91 9657459908</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 4px" }}>Location</p>
                    <p style={{ fontSize: "16px", fontWeight: "600", color: "var(--text)", margin: 0 }}>Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 16px" }}>Connect with me</p>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a href="https://www.linkedin.com/in/ajinkya-saivar" target="_blank" rel="noreferrer" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text)", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.borderColor = "var(--primary)" }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border)" }}>
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://github.com/ajinkya682" target="_blank" rel="noreferrer" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text)", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.borderColor = "var(--primary)" }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border)" }}>
                    <GithubIcon size={18} />
                  </a>
                  <a href="https://x.com/Ajinkya_Saivar" target="_blank" rel="noreferrer" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text)", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.borderColor = "var(--primary)" }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border)" }}>
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="card"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "24px",
                  padding: "40px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Decorative background glow */}
                <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px", background: "var(--primary)", filter: "blur(80px)", opacity: 0.15, borderRadius: "50%", zIndex: 0 }} />

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ textAlign: "center", padding: "48px 24px", position: "relative", zIndex: 1 }}
                    >
                      <CheckCircle size={56} style={{ color: "#10b981", margin: "0 auto 16px", display: "block" }} />
                      <h4 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text)", marginBottom: "8px" }}>
                        Message Sent!
                      </h4>
                      <p style={{ fontSize: "14px", color: "var(--secondary)", lineHeight: "1.7" }}>
                        Thank you for reaching out! I've received your message and will get back to you shortly. Check your email for a confirmation.
                      </p>
                      <Button variant="ghost" size="sm" onClick={() => setStatus("idle")} style={{ marginTop: "20px" }}>
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" style={{ position: "relative", zIndex: 1 }}>
                      <h3 style={{ fontSize: "24px", fontWeight: "800", color: "var(--text)", marginBottom: "32px" }}>Send me a message</h3>

                      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label htmlFor="cp-name" style={{ fontSize: "13px", fontWeight: "600", color: "var(--secondary)" }}>Your Name</label>
                            <input 
                              type="text" id="cp-name" name="name" 
                              value={formData.name} onChange={handleChange}
                              placeholder="John Doe" required
                              style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)", fontSize: "14px", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" }}
                              onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                              onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                            />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label htmlFor="cp-email" style={{ fontSize: "13px", fontWeight: "600", color: "var(--secondary)" }}>Your Email</label>
                            <input 
                              type="email" id="cp-email" name="email"
                              value={formData.email} onChange={handleChange}
                              placeholder="john@example.com" required
                              style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)", fontSize: "14px", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" }}
                              onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                              onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                            />
                          </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <label htmlFor="cp-subject" style={{ fontSize: "13px", fontWeight: "600", color: "var(--secondary)" }}>Subject</label>
                          <input 
                            type="text" id="cp-subject" name="subject"
                            value={formData.subject} onChange={handleChange}
                            placeholder="How can I help you?" required
                            style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)", fontSize: "14px", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" }}
                            onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                            onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                          />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <label htmlFor="cp-message" style={{ fontSize: "13px", fontWeight: "600", color: "var(--secondary)" }}>Message</label>
                          <textarea 
                            id="cp-message" name="message"
                            value={formData.message} onChange={handleChange}
                            placeholder="Write your message here..." required rows={5}
                            style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)", fontSize: "14px", outline: "none", resize: "vertical", transition: "border-color 0.2s", boxSizing: "border-box" }}
                            onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                            onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                          />
                        </div>

                        {status === "error" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px" }}
                          >
                            <AlertCircle size={18} style={{ color: "#ef4444", flexShrink: 0 }} />
                            <p style={{ fontSize: "13px", color: "#ef4444", margin: 0 }}>{errorMsg}</p>
                          </motion.div>
                        )}

                        <div style={{ marginTop: "8px" }}>
                          <Button type="submit" variant="primary" size="lg" loading={status === "loading"} icon={<Send size={16} />} style={{ width: "100%", justifyContent: "center" }}>
                            {status === "loading" ? "Sending..." : "Send Message"}
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
