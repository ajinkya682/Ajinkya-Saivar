import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { Star, GitCommit, Flame, Code } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";

const stats = [
  { icon: Star, label: "Total Stars", value: "12", color: "#f59e0b" },
  { icon: GitCommit, label: "Commits (Last Year)", value: "200+", color: "#3b82f6" },
  { icon: Flame, label: "Current Streak", value: "14 days", color: "#ef4444" },
  { icon: Code, label: "Top Language", value: "JavaScript", color: "#10b981" },
];

const languages = [
  { name: "JavaScript", percent: 62, color: "#f7df1e" },
  { name: "CSS", percent: 18, color: "#264de4" },
  { name: "HTML", percent: 12, color: "#e34c26" },
  { name: "Shell", percent: 8, color: "#89e051" },
];

export default function GitHubSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="github" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="container">
        <SectionHeading
          label="Open Source"
          title="GitHub Activity"
          description="Consistent commits, growing stars, and an always-active streak — the numbers behind the work."
          center
        />

        {/* Stats cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {stats.map(({ icon: Icon, label, value, color }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="card"
              style={{ padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-md)", background: `${color}1a`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={22} style={{ color }} />
              </div>
              <div>
                <p style={{ fontSize: "22px", fontWeight: "800", color: "var(--text)", margin: 0, letterSpacing: "-0.03em" }}>{value}</p>
                <p style={{ fontSize: "12px", color: "var(--secondary)", margin: "2px 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "500" }}>{label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Language bar + GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
          style={{ padding: "32px" }}
        >
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--text)", marginBottom: "24px" }}>
            Most Used Languages
          </h3>

          {/* Stacked bar */}
          <div style={{ display: "flex", height: "10px", borderRadius: "var(--radius-full)", overflow: "hidden", marginBottom: "24px" }}>
            {languages.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ width: 0 }}
                animate={inView ? { width: `${lang.percent}%` } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{ background: lang.color, height: "100%" }}
              />
            ))}
          </div>

          {/* Legend */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {languages.map((lang) => (
              <div key={lang.name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: lang.color }} />
                <span style={{ fontSize: "13px", color: "var(--secondary)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "500" }}>
                  {lang.name} <span style={{ color: "var(--text)", fontWeight: "600" }}>{lang.percent}%</span>
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
            <a
              href="https://github.com/ajinkya-saivar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--primary)", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}
            >
              <GithubIcon size={18} />
              View GitHub Profile →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
