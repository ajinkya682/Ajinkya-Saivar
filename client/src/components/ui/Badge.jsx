import { cn } from "../../lib/utils";

export default function Badge({ children, variant = "default", className = "", dot = false }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 12px",
    borderRadius: "var(--radius-full)",
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    letterSpacing: "0.02em",
    transition: "all var(--transition-fast)",
  };

  const variants = {
    default: {
      background: "rgba(26, 77, 143, 0.1)",
      color: "var(--primary)",
      border: "1px solid rgba(26, 77, 143, 0.2)",
    },
    success: {
      background: "rgba(16, 185, 129, 0.1)",
      color: "#10b981",
      border: "1px solid rgba(16, 185, 129, 0.2)",
    },
    outline: {
      background: "transparent",
      color: "var(--secondary)",
      border: "1px solid var(--border)",
    },
    dark: {
      background: "rgba(255,255,255,0.08)",
      color: "var(--text)",
      border: "1px solid var(--border)",
    },
  };

  return (
    <span style={{ ...base, ...variants[variant] }} className={className}>
      {dot && <span className="pulse-dot" style={{ width: 7, height: 7, flexShrink: 0 }} />}
      {children}
    </span>
  );
}
