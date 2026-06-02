import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import MagneticButton from "../ui/MagneticButton";
import { staggerContainer, fadeUp } from "../../lib/animations";
import { ArrowRight, Download, Code2, Users, Star } from "lucide-react";
import heroPhoto from "../../assets/hero-photo.png";

const techStack = [
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "Express", icon: "logos:express" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
];

const stats = [
  { icon: Code2, value: "20+", label: "Projects Built" },
  { icon: Users, value: "5+", label: "Happy Clients" },
  { icon: Star, value: "2+", label: "Years of Learning" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "var(--navbar-height)",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #fdf8f2 0%, #fef5e8 40%, #f5f0ff 100%)",
      }}
    >
      {/* Background subtle circle / blob */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: "30%",
        width: "520px",
        height: "520px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,77,143,0.06) 0%, transparent 70%)",
        transform: "translate(50%, -50%)",
        zIndex: 0,
        filter: "blur(60px)",
      }} />

      {/* Faint dot-grid background */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div className="hero-outer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "0",
          minHeight: "calc(100vh - var(--navbar-height) - 80px)",
        }}>

          {/* ─── LEFT COLUMN ─── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ paddingRight: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            {/* Available badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: "28px" }}>
              <Badge variant="success" dot>
                Available for Internships
              </Badge>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={fadeUp} style={{ marginBottom: "12px" }}>
              <h1
                style={{
                  fontSize: "clamp(44px, 7vw, 82px)",
                  fontWeight: "800",
                  lineHeight: "1.05",
                  letterSpacing: "-0.03em",
                  color: "#0a0a0a",
                  margin: 0,
                }}
              >
                Hi, I'm
              </h1>
              <h1
                style={{
                  fontSize: "clamp(48px, 8vw, 90px)",
                  fontWeight: "800",
                  lineHeight: "1.0",
                  letterSpacing: "-0.04em",
                  color: "var(--primary)",
                  margin: 0,
                }}
              >
                Ajinkya.
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(15px, 1.8vw, 19px)",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "14px",
                lineHeight: "1.35",
              }}
            >
              Full-Stack Developer &amp; MERN Stack Specialist
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "15px",
                color: "#64748b",
                lineHeight: "1.75",
                marginBottom: "36px",
                maxWidth: "420px",
              }}
            >
              I build fast, production-grade web applications with React, Node.js, and MongoDB. A self-taught developer from rural Maharashtra — turning ideas into working software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "44px" }}
            >
              <MagneticButton>
                <Button href="/projects" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                  View Projects
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  variant="secondary"
                  size="lg"
                  icon={<Download size={18} />}
                >
                  Download Resume
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "32px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                flexWrap: "wrap",
              }}
            >
              {stats.map(({ icon: StatIcon, value, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(26,77,143,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <StatIcon size={16} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "20px", fontWeight: "800", color: "#0a0a0a", margin: 0, letterSpacing: "-0.03em", lineHeight: 1 }}>
                      {value}
                    </p>
                    <p style={{ fontSize: "12px", color: "#64748b", margin: "2px 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "500" }}>
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN ─── */}
          <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", height: "100%" }}>

            {/* Hero Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img
                src={heroPhoto}
                alt="Ajinkya Saivar — Full-Stack Developer"
                style={{
                  width: "min(460px, 90%)",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  display: "block",
                  filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.12))",
                }}
              />
            </motion.div>

            {/* Tech Stack Card — bottom-right overlay */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                bottom: "0px",
                right: "-20px",
                zIndex: 3,
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "20px",
                padding: "20px 24px",
                width: "260px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <p style={{
                fontSize: "10px",
                fontWeight: "700",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#94a3b8",
                marginBottom: "14px",
              }}>
                Tech Stack
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
              }}>
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.05 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      padding: "7px 8px",
                      borderRadius: "8px",
                      background: "#f8fafc",
                      border: "1px solid #f1f5f9",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#334155",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <Icon icon={tech.icon} width={16} height={16} />
                    {tech.name}
                  </motion.div>
                ))}
              </div>

              {/* Status */}
              <div style={{
                marginTop: "14px",
                paddingTop: "12px",
                borderTop: "1px solid #f1f5f9",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span className="pulse-dot" style={{ width: 7, height: 7, flexShrink: 0 }} />
                <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Currently building cool stuff
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ─── Responsive styles ─── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-outer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 20px !important;
          }
          .hero-outer-grid > div:first-child {
            padding-right: 0 !important;
            order: 1;
          }
          .hero-outer-grid > div:last-child {
            order: 2;
            height: auto !important;
          }
        }

        [data-theme="dark"] section#home {
          background: linear-gradient(135deg, #0d0d10 0%, #111520 40%, #0f0d1a 100%) !important;
        }

        [data-theme="dark"] .hero-stat-value {
          color: var(--text) !important;
        }
      `}</style>
    </section>
  );
}
