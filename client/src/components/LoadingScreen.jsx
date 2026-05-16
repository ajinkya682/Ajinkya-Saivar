import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState("in"); // in | hold | out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("out"), 1400);
    const t3 = setTimeout(() => onComplete?.(), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "out" ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        <motion.div
          className="loading-initials"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase !== "in" ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{ color: "var(--primary)" }}>A</span>S
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={phase !== "in" ? { width: "80px" } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            height: "2px",
            background: "linear-gradient(to right, var(--primary), var(--primary-light))",
            borderRadius: "var(--radius-full)",
          }}
        />
      </div>
    </motion.div>
  );
}
