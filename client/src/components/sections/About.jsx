import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "../../lib/animations";
import avatarImg from "../../assets/avatar.png";
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
                  width: "min(320px, 80vw)",
                  height: "min(320px, 80vw)",
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
              I'm <strong style={{ color: "var(--text)" }}>Ajinkya Saivar</strong>, a 16-year-old self-taught Full-Stack Developer from Maharashtra, India. I discovered programming through my B.Sc. coursework and immediately knew it was what I wanted to do.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: "16px", color: "var(--secondary)", lineHeight: "1.85", marginBottom: "32px" }}>
              With no formal training and limited resources, I taught myself the MERN stack through online courses, documentation, and by building real projects — one problem at a time.
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
