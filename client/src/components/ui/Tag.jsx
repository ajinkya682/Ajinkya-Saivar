export default function Tag({ children, color }) {
  const colorMap = {
    React: { bg: "rgba(97, 218, 251, 0.1)", color: "#61DAFB", border: "rgba(97, 218, 251, 0.2)" },
    "Node.js": { bg: "rgba(104, 160, 99, 0.1)", color: "#68A063", border: "rgba(104, 160, 99, 0.2)" },
    MongoDB: { bg: "rgba(77, 179, 61, 0.1)", color: "#4DB33D", border: "rgba(77, 179, 61, 0.2)" },
    Express: { bg: "rgba(150, 150, 150, 0.1)", color: "var(--secondary)", border: "rgba(150,150,150,0.2)" },
    "Express.js": { bg: "rgba(150, 150, 150, 0.1)", color: "var(--secondary)", border: "rgba(150,150,150,0.2)" },
    TypeScript: { bg: "rgba(49, 120, 198, 0.1)", color: "#3178C6", border: "rgba(49, 120, 198, 0.2)" },
    JavaScript: { bg: "rgba(247, 223, 30, 0.1)", color: "#c9a800", border: "rgba(247, 223, 30, 0.2)" },
    "Tailwind CSS": { bg: "rgba(56, 189, 248, 0.1)", color: "#38BDF8", border: "rgba(56, 189, 248, 0.2)" },
    "Socket.io": { bg: "rgba(255,255,255,0.08)", color: "var(--text)", border: "var(--border)" },
    Redux: { bg: "rgba(118, 74, 188, 0.1)", color: "#764ABC", border: "rgba(118, 74, 188, 0.2)" },
    Stripe: { bg: "rgba(99, 91, 255, 0.1)", color: "#635BFF", border: "rgba(99, 91, 255, 0.2)" },
    JWT: { bg: "rgba(251, 191, 36, 0.1)", color: "#F59E0B", border: "rgba(251,191,36,0.2)" },
    Docker: { bg: "rgba(0, 150, 215, 0.1)", color: "#0096D7", border: "rgba(0, 150, 215, 0.2)" },
    "GitHub API": { bg: "rgba(255,255,255,0.06)", color: "var(--text)", border: "var(--border)" },
    "Next.js": { bg: "rgba(255,255,255,0.08)", color: "var(--text)", border: "var(--border)" },
    "OpenAI API": { bg: "rgba(16, 185, 129, 0.1)", color: "#10b981", border: "rgba(16,185,129,0.2)" },
  };

  const style = colorMap[children] || {
    bg: "rgba(100,116,139,0.1)",
    color: "var(--secondary)",
    border: "rgba(100,116,139,0.2)",
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: "var(--radius-full)",
        fontSize: "12px",
        fontWeight: "600",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
