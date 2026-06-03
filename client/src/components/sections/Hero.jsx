import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { Sun } from "lucide-react";
import heroPhoto from "../../assets/hero-photo.png";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--hero-bg)",
        paddingTop: "var(--navbar-height)",
      }}
    >
      {/* Dynamic Background Gradient matching the warm editorial vibe */}
      <div style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "600px",
        background: "radial-gradient(circle, var(--hero-glow) 0%, transparent 70%)",
        filter: "blur(60px)",
        zIndex: 0,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, height: "100%", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* BACKGROUND TYPOGRAPHY: "Hey, there" */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: "12%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            textAlign: "center",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: "clamp(80px, 14vw, 180px)",
            color: "var(--hero-text)",
            margin: 0,
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          }}>
            Hey, there
          </h2>
        </motion.div>

        {/* HERO PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            height: "100%",
            marginTop: "120px",
          }}
        >
          <img
            src={heroPhoto}
            alt="Ajinkya Saivar"
            className="hero-portrait"
            style={{
              width: "min(600px, 95%)",
              height: "auto",
              objectFit: "contain",
              objectPosition: "bottom",
              display: "block",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
            }}
          />
        </motion.div>

        {/* FOREGROUND ELEMENTS LAYER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="hero-foreground"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none", // Let clicks pass through to background if needed, except on elements
          }}
        >
          {/* LEFT SIDE: Badge & Big Title */}
          <div className="hero-left" style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "auto",
          }}>
            <motion.div variants={fadeUp} style={{ marginBottom: "24px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                background: "var(--card)",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <Sun size={14} style={{ color: "#f59e0b" }} />
                <span style={{ fontSize: "12px", fontWeight: "600", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>
                  Available for new opportunities
                </span>
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(50px, 7vw, 90px)",
                fontWeight: "800",
                lineHeight: "0.95",
                letterSpacing: "-0.04em",
                color: "var(--text)",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              I AM<br />AJINKYA
            </motion.h1>
          </div>

          {/* RIGHT SIDE: Description & Role */}
          <div className="hero-right" style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "80px",
            pointerEvents: "auto",
          }}>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "var(--text)",
                maxWidth: "240px",
                lineHeight: "1.6",
                margin: 0,
                textAlign: "left",
              }}
            >
              Specialized in Full-Stack Web Development, MERN Stack, and building production-ready scalable applications.
            </motion.p>
            
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: "800",
                lineHeight: "1",
                letterSpacing: "-0.03em",
                color: "var(--text)",
                margin: 0,
                textTransform: "uppercase",
                textAlign: "right",
              }}
            >
              FULL STACK<br />DEVELOPER
            </motion.h2>
          </div>
        </motion.div>

      </div>

      <style>{`
        /* Hero-specific theme variables */
        :root {
          --hero-bg: #fdfaf6;
          --hero-glow: #ffedd5;
          --hero-text: #1a1a1a;
        }

        [data-theme="dark"] {
          --hero-bg: #09090b;
          --hero-glow: rgba(59, 130, 246, 0.15);
          --hero-text: #f8fafc;
        }

        /* Responsive adjustments */
        .hero-portrait {
          mix-blend-mode: darken;
        }

        [data-theme="dark"] .hero-portrait {
          mix-blend-mode: normal;
          /* In dark mode, a white background image needs to be clipped or accepted as a white card */
          border-radius: 24px;
        }

        @media (max-width: 1024px) {
          .hero-left {
            left: 20px !important;
          }
          .hero-right {
            right: 20px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-foreground {
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 40px 20px !important;
            gap: 40px !important;
          }
          
          .hero-left, .hero-right {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            transform: none !important;
            align-items: center !important;
            text-align: center !important;
            gap: 20px !important;
          }

          .hero-right p, .hero-right h2 {
            text-align: center !important;
          }

          #home img {
            width: 100% !important;
            max-width: 400px !important;
            margin-top: -60px;
          }

          #home h2[style*="Playfair"] {
            font-size: 60px !important;
            margin-top: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
