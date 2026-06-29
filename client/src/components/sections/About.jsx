import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "../../lib/animations";
import avatarImg from "../../assets/ajinkya.jpeg";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" ref={ref} style={{ background: "var(--bg)" }}>
      <div className="container">
        <SectionHeading
          label="Who I Am"
          title="The Story Behind the Code"
          description="From a small farming village in Maharashtra to building full-stack web applications."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "72px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* LEFT — Avatar */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeLeft}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "min(350px, 80vw)",
                  height: "min(500px, 80vw)",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  border: "2px solid var(--border)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <img
                  src={avatarImg}
                  alt="Ajinkya Saivar — Full-Stack Developer"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  right: "-16px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "12px 18px",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <p style={{ fontSize: "12px", color: "var(--secondary)", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Status</p>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--text)", margin: 0, display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="pulse-dot" style={{ width: 7, height: 7 }} />
                  Open to work
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} style={{ fontSize: "16px", color: "var(--secondary)", lineHeight: "1.85", marginBottom: "20px" }}>
              I'm <strong style={{ color: "var(--text)" }}>Ajinkya Saivar</strong>, a <strong style={{ color: "var(--text)" }}>Full-Stack Developer</strong> from <strong style={{ color: "var(--text)" }}>Maharashtra, India</strong>, currently pursuing a B.Sc. while building modern web applications with the <strong style={{ color: "var(--text)" }}>MERN stack</strong>.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: "16px", color: "var(--secondary)", lineHeight: "1.85", marginBottom: "32px" }}>
              My journey into technology started with curiosity and a desire to create. Through consistent self-learning, hands-on projects, and countless hours of practice, I've developed skills in <strong style={{ color: "var(--text)" }}>React, Node.js, Express.js, MongoDB, REST APIs, authentication systems,</strong> and <strong style={{ color: "var(--text)" }}>AI integrations</strong>.
            </motion.p>

            <motion.p variants={fadeUp} style={{ fontSize: "16px", color: "var(--secondary)", lineHeight: "1.85", marginBottom: "32px" }}>
              Alongside academics and responsibilities in farming, I continue to sharpen my development skills, explore <strong style={{ color: "var(--text)" }}>Data Structures & Algorithms (DSA)</strong> and <strong style={{ color: "var(--text)" }}>System Design</strong>, and build real-world applications that solve meaningful problems.
            </motion.p>

            <motion.p variants={fadeUp} style={{ fontSize: "16px", color: "var(--secondary)", lineHeight: "1.85", marginBottom: "32px" }}>
              My goal is to grow into a <strong style={{ color: "var(--text)" }}>world-class software engineer</strong> and <strong style={{ color: "var(--text)" }}>create products</strong> that make a lasting impact.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Button href="/about" variant="primary" icon={<ArrowRight size={16} />} size="md">
                Read My Full Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
