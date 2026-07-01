import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
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
      {/* Editorial Gradient Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, var(--hero-glow) 0%, transparent 60%)",
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* BACKGROUND TYPOGRAPHY: "Hey, there" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
            textAlign: "center",
            zIndex: 1,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: "400",
              fontSize: "clamp(80px, 14vw, 220px)",
              background: "linear-gradient(180deg, var(--hero-text) 0%, transparent 120%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              lineHeight: "1",
              letterSpacing: "-0.01em",
              opacity: 0.15,
              whiteSpace: "nowrap",
            }}
          >
            Hey, there
          </h2>
        </motion.div>

        {/* CENTER PORTRAIT (YOUR 3D AVATAR) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-portrait-container"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            height: "100%",
            marginTop: "60px",
            pointerEvents: "none",
          }}
        >
          <img
            src={heroPhoto}
            alt="Ajinkya Saivar"
            className="hero-portrait"
            style={{
              width: "min(680px, 95%)",
              height: "auto",
              objectFit: "contain",
              objectPosition: "bottom",
              display: "block",
            }}
          />
        </motion.div>

        {/* FOREGROUND ELEMENTS */}
        <div
          className="hero-foreground"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          {/* LEFT SIDE: Badge & Big Title */}
          <div
            className="hero-left"
            style={{
              position: "absolute",
              left: "0%",
              top: "35%",
              transform: "translateY(-50%)",
              pointerEvents: "auto",
            }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              style={{ marginBottom: "20px" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  background: "var(--card)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <Sun size={14} style={{ color: "var(--primary)" }} />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "var(--text)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Available for new opportunities
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              style={{
                fontSize: "clamp(50px, 7vw, 100px)",
                fontWeight: "800",
                lineHeight: "0.95",
                letterSpacing: "-0.04em",
                color: "var(--text)",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              I AM
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, var(--primary) 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                AJINKYA
              </span>
            </motion.h1>
          </div>

          {/* RIGHT SIDE: Description */}
          <div
            className="hero-right"
            style={{
              position: "absolute",
              right: "2%",
              top: "40%" /* Positioned slightly higher so it doesn't collide with the bottom */,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pointerEvents: "auto",
              maxWidth: "280px",
            }}
          >
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "var(--secondary)",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Specialized in{" "}
              <strong style={{ fontWeight: 700, color: "var(--text)" }}>
                Full-Stack Web Development
              </strong>
              , MERN Stack, and building production-ready scalable applications.
            </motion.p>
          </div>

          {/* BOTTOM RIGHT: Role Text */}
          <div
            className="hero-bottom-right"
            style={{
              position: "absolute",
              right: "2%",
              bottom: "15%",
              pointerEvents: "auto",
            }}
          >
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              style={{
                fontSize: "clamp(30px, 4vw, 54px)",
                fontWeight: "800",
                lineHeight: "0.95",
                letterSpacing: "-0.03em",
                margin: 0,
                textTransform: "uppercase",
                textAlign: "right",
              }}
            >
              <span style={{ color: "var(--text)" }}>FULL STACK</span>
              <br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px var(--secondary)",
                }}
              >
                DEVELOPER
              </span>
            </motion.h2>
          </div>
        </div>
      </div>

      <style>{`
        /* Hero-specific theme variables */
        :root {
          --hero-bg: #fcf9f2;
          --hero-glow: #ffedd5;
          --hero-text: #1a1a1a;
        }

        [data-theme="dark"] {
          --hero-bg: #0a0a0a;
          --hero-glow: rgba(59, 130, 246, 0.1);
          --hero-text: #f8fafc;
        }

        /* Mix-blend-mode to make your 3D avatar's background perfectly transparent on light themes */
        .hero-portrait {
          mix-blend-mode: multiply;
        }

        [data-theme="dark"] .hero-portrait {
          mix-blend-mode: normal;
        }

        /* Responsive adjustments for mobile/tablets */
        @media (max-width: 1024px) {
          .hero-portrait {
            width: min(450px, 90%) !important;
          }
          .hero-left {
            left: 5% !important;
          }
          .hero-right, .hero-bottom-right {
            right: 5% !important;
          }
        }

        @media (max-width: 768px) {
          .hero-foreground {
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 20px !important;
            margin-top: -60px !important;
            gap: 32px !important;
          }
          
          .hero-left, .hero-right, .hero-bottom-right {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            transform: none !important;
            align-items: center !important;
            text-align: center !important;
            max-width: 100% !important;
          }

          .hero-bottom-right h2 {
            text-align: center !important;
          }

          .hero-portrait-container {
            margin-top: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}
