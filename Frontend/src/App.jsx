import { useState, useEffect, useRef } from "react";

const TARGET_DATE = new Date(Date.now() + 42 * 24 * 60 * 60 * 1000);

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Particle({ x, y, size, delay, duration }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(212,175,100,0.55)",
        animation: `floatUp ${duration}s ${delay}s infinite ease-in-out`,
        pointerEvents: "none",
      }}
    />
  );
}

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: `${Math.random() * 3 + 1}px`,
  delay: Math.random() * 6,
  duration: 5 + Math.random() * 8,
}));

function CountUnit({ value, label }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        minWidth: "70px",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 700,
          color: "#D4AF64",
          lineHeight: 1,
          letterSpacing: "-1px",
          textShadow: "0 0 40px rgba(212,175,100,0.35)",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "11px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function App() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0804",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:wght@300;400;500&display=swap');

        @keyframes floatUp {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.3); opacity: 0.9; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0px rgba(212,175,100,0); }
          50% { box-shadow: 0 0 24px rgba(212,175,100,0.25); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes outerGlow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }

        .notify-btn:hover {
          background: #D4AF64 !important;
          color: #0A0804 !important;
          transform: translateY(-1px);
        }
        .notify-btn:active {
          transform: translateY(0);
        }
        .email-input:focus {
          border-color: rgba(212,175,100,0.5) !important;
          outline: none;
        }
        .social-link:hover {
          color: #D4AF64 !important;
        }
        .divider-line {
          animation: revealLine 1.2s 0.4s cubic-bezier(0.77,0,0.175,1) both;
          transform-origin: center;
        }
      `}</style>

      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(100,70,20,0.18) 0%, transparent 70%)",
          animation: "outerGlow 5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Grid texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      {/* Top horizontal rule */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #D4AF64 40%, #D4AF64 60%, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "680px",
          width: "100%",
          textAlign: "center",
          animation: "fadeIn 1s 0.1s both",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#D4AF64",
            marginBottom: "28px",
            animation: "fadeIn 0.8s 0.2s both",
            opacity: 0,
          }}
        >
          Portfolio — Coming Soon
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
            animation: "fadeIn 0.8s 0.25s both",
            opacity: 0,
          }}
        >
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(212,175,100,0.25)",
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              border: "1px solid rgba(212,175,100,0.6)",
              transform: "rotate(45deg)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(212,175,100,0.25)",
            }}
          />
        </div>

        {/* Main title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 10vw, 96px)",
            fontWeight: 700,
            lineHeight: 1.0,
            color: "#F5EDD5",
            marginBottom: "12px",
            letterSpacing: "-1px",
            animation: "fadeIn 1s 0.3s both",
            opacity: 0,
          }}
        >
          Something
          <br />
          <em style={{ color: "#D4AF64", fontStyle: "italic" }}>beautiful</em>
          <br />
          is coming.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "18px",
            fontWeight: 300,
            color: "rgba(245,237,213,0.55)",
            lineHeight: 1.7,
            marginBottom: "48px",
            maxWidth: "420px",
            marginLeft: "auto",
            marginRight: "auto",
            animation: "fadeIn 0.9s 0.5s both",
            opacity: 0,
          }}
        >
          A personal portfolio crafted with care — showcasing design, code, and
          creative vision.
        </p>

        {/* Countdown */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(16px, 4vw, 40px)",
            marginBottom: "56px",
            animation: "fadeIn 0.9s 0.65s both",
            opacity: 0,
          }}
        >
          <CountUnit value={days} label="Days" />
          <div
            style={{
              color: "rgba(212,175,100,0.4)",
              fontSize: "40px",
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1,
              alignSelf: "flex-start",
              paddingTop: "4px",
            }}
          >
            ·
          </div>
          <CountUnit value={hours} label="Hours" />
          <div
            style={{
              color: "rgba(212,175,100,0.4)",
              fontSize: "40px",
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1,
              alignSelf: "flex-start",
              paddingTop: "4px",
            }}
          >
            ·
          </div>
          <CountUnit value={minutes} label="Minutes" />
          <div
            style={{
              color: "rgba(212,175,100,0.4)",
              fontSize: "40px",
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1,
              alignSelf: "flex-start",
              paddingTop: "4px",
            }}
          >
            ·
          </div>
          <CountUnit value={seconds} label="Seconds" />
        </div>

        {/* Email capture */}
        {status !== "success" ? (
          <div
            style={{
              animation: "fadeIn 0.9s 0.8s both",
              opacity: 0,
            }}
          >
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(245,237,213,0.35)",
                marginBottom: "16px",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Be the first to know
            </p>
            <div
              style={{
                display: "flex",
                gap: "0",
                maxWidth: "440px",
                margin: "0 auto",
                border:
                  status === "error"
                    ? "1px solid rgba(220,80,80,0.5)"
                    : "1px solid rgba(212,175,100,0.22)",
                borderRadius: "4px",
                overflow: "hidden",
                animation: status === "error" ? "pulseGold 0.4s" : "none",
                transition: "border-color 0.3s",
              }}
            >
              <input
                ref={inputRef}
                className="email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                onKeyDown={handleKey}
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  background: "rgba(255,255,255,0.04)",
                  border: "none",
                  color: "#F5EDD5",
                  fontSize: "15px",
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: "0.02em",
                  outline: "none",
                }}
              />
              <button
                className="notify-btn"
                onClick={handleSubmit}
                disabled={status === "loading"}
                style={{
                  padding: "14px 24px",
                  background: "transparent",
                  border: "none",
                  borderLeft: "1px solid rgba(212,175,100,0.22)",
                  color: "#D4AF64",
                  fontSize: "11px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {status === "loading" ? (
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      border: "1.5px solid rgba(212,175,100,0.3)",
                      borderTopColor: "#D4AF64",
                      animation: "spin 0.7s linear infinite",
                      display: "inline-block",
                    }}
                  />
                ) : (
                  "Notify Me"
                )}
              </button>
            </div>
            {status === "error" && (
              <p
                style={{
                  color: "rgba(220,100,100,0.85)",
                  fontSize: "12px",
                  marginTop: "8px",
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: "0.05em",
                }}
              >
                Please enter a valid email address.
              </p>
            )}
          </div>
        ) : (
          <div
            style={{
              animation: "fadeIn 0.6s both",
              opacity: 0,
              padding: "20px 32px",
              border: "1px solid rgba(212,175,100,0.25)",
              borderRadius: "4px",
              maxWidth: "440px",
              margin: "0 auto",
            }}
          >
            <div style={{ fontSize: "22px", marginBottom: "6px" }}>✦</div>
            <p
              style={{
                color: "#D4AF64",
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
                fontStyle: "italic",
                marginBottom: "4px",
              }}
            >
              You're on the list.
            </p>
            <p
              style={{
                color: "rgba(245,237,213,0.4)",
                fontSize: "13px",
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "0.05em",
              }}
            >
              We'll reach out when the curtain rises.
            </p>
          </div>
        )}

        {/* Bottom divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "52px",
            marginBottom: "24px",
            animation: "fadeIn 0.8s 1s both",
            opacity: 0,
          }}
        >
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(212,175,100,0.12)",
            }}
          />
          <div
            style={{
              width: "4px",
              height: "4px",
              background: "rgba(212,175,100,0.35)",
              transform: "rotate(45deg)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(212,175,100,0.12)",
            }}
          />
        </div>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            animation: "fadeIn 0.8s 1.1s both",
            opacity: 0,
          }}
        >
          {["GitHub", "LinkedIn", "Dribbble", "Twitter"].map((name) => (
            <a
              key={name}
              href="#"
              className="social-link"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,237,213,0.3)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #D4AF64 40%, #D4AF64 60%, transparent)",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
