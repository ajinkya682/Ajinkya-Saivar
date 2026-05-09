import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import MagneticButton from "../ui/MagneticButton";
import { staggerContainer, fadeUp, fadeRight, fadeLeft } from "../../lib/animations";
import { ArrowRight, Download } from "lucide-react";

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
      }}
    >
      {/* Background dot-grid */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Gradient blobs */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "10%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,77,143,0.12) 0%, transparent 70%)",
        zIndex: 0,
        filter: "blur(40px)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "48px", paddingBottom: "80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* LEFT — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Available badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: "24px" }}>
              <Badge variant="success" dot>
                Available for Internships
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-display"
              style={{
                fontSize: "clamp(42px, 7vw, 80px)",
                lineHeight: "1.08",
                marginBottom: "16px",
                color: "var(--text)",
              }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Ajinkya.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(18px, 2.5vw, 22px)",
                fontWeight: "600",
                color: "var(--text)",
                marginBottom: "16px",
                lineHeight: "1.4",
              }}
            >
              Full-Stack Developer & MERN Stack Specialist
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "16px",
                color: "var(--secondary)",
                lineHeight: "1.8",
                marginBottom: "40px",
                maxWidth: "480px",
              }}
            >
              I build fast, production-grade web applications with React, Node.js, and MongoDB.
              A self-taught developer from rural Maharashtra — turning ideas into working software.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <MagneticButton>
                <Button href="/projects" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                  View Projects
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/resume.pdf" target="_blank" variant="secondary" size="lg" icon={<Download size={18} />}>
                  Download Resume
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* RIGHT — Glass Tech Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "36px",
                width: "100%",
                maxWidth: "380px",
                boxShadow: "var(--shadow-xl)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "20px",
                }}
              >
                Tech Stack
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 12px",
                      borderRadius: "var(--radius-md)",
                      background: "rgba(0,0,0,0.03)",
                      border: "1px solid var(--border)",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "var(--text)",
                    }}
                  >
                    <Icon icon={tech.icon} width={20} height={20} />
                    {tech.name}
                  </motion.div>
                ))}
              </div>

              {/* Status indicator */}
              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="pulse-dot" />
                <span style={{ fontSize: "13px", color: "var(--secondary)" }}>
                  Currently building cool stuff
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
