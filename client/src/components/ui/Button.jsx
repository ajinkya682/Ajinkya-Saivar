import { motion } from "framer-motion";

const styles = {
  primary: {
    background: "var(--primary)",
    color: "#fff",
    border: "2px solid var(--primary)",
    boxShadow: "0 4px 14px rgba(26, 77, 143, 0.35)",
  },
  secondary: {
    background: "transparent",
    color: "var(--text)",
    border: "2px solid var(--border-strong)",
    boxShadow: "none",
  },
  ghost: {
    background: "transparent",
    color: "var(--primary)",
    border: "2px solid transparent",
    boxShadow: "none",
  },
  danger: {
    background: "transparent",
    color: "#ef4444",
    border: "2px solid #ef4444",
    boxShadow: "none",
  },
};

const hoverStyles = {
  primary: { background: "var(--primary-light)", borderColor: "var(--primary-light)", boxShadow: "0 6px 20px rgba(26, 77, 143, 0.45)" },
  secondary: { background: "var(--card)", borderColor: "var(--primary)", color: "var(--primary)" },
  ghost: { background: "rgba(26, 77, 143, 0.08)", borderColor: "transparent" },
  danger: { background: "rgba(239,68,68,0.08)" },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  target,
  download,
  disabled = false,
  loading = false,
  icon,
  className = "",
  type = "button",
}) {
  const sizeMap = {
    sm: { padding: "8px 18px", fontSize: "13px" },
    md: { padding: "11px 24px", fontSize: "15px" },
    lg: { padding: "14px 32px", fontSize: "16px" },
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "var(--radius-md)",
    fontWeight: "600",
    fontFamily: "'Inter', sans-serif",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all var(--transition-fast)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizeMap[size],
    ...styles[variant],
  };

  const props = {
    style: baseStyle,
    whileHover: !disabled && !loading ? hoverStyles[variant] : {},
    whileTap: !disabled && !loading ? { scale: 0.97 } : {},
    onClick: !disabled && !loading ? onClick : undefined,
    className,
    type: href ? undefined : type,
    download,
  };

  const content = (
    <>
      {loading ? (
        <span
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            border: "2px solid currentColor",
            borderTopColor: "transparent",
            animation: "spin 0.7s linear infinite",
            display: "inline-block",
          }}
        />
      ) : icon ? (
        icon
      ) : null}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...props}>
      {content}
    </motion.button>
  );
}
