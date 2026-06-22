import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ onCommandOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ⌘K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onCommandOpen?.();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onCommandOpen]);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontSize: "20px",
              fontWeight: "800",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.04em",
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "var(--primary)" }}>A</span>S
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.href ||
                (link.href === "/" && location.pathname === "/");
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  style={{
                    position: "relative",
                    padding: "8px 14px",
                    fontSize: "14px",
                    fontWeight: isActive ? "600" : "500",
                    color: isActive ? "var(--text)" : "var(--secondary)",
                    borderRadius: "var(--radius-md)",
                    transition: "color var(--transition-fast)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive
                      ? "var(--text)"
                      : "var(--secondary)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        bottom: "2px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "20px",
                        height: "2px",
                        borderRadius: "var(--radius-full)",
                        background: "var(--primary)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Command Palette trigger */}
            <motion.button
              onClick={onCommandOpen}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Open command menu"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 12px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--secondary)",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
              className="cmd-btn"
            >
              <Terminal size={14} />
              <span className="cmd-label">⌘K</span>
            </motion.button>

            <ThemeToggle />

            <Button
              href="/assets/documents/ajinkya_resume.pdf"
              download="ajinkya_resume.pdf"
              target="_blank"
              variant="primary"
              size="sm"
              className="resume-btn"
            >
              Resume
            </Button>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setMobileOpen(true)}
              whileTap={{ scale: 0.9 }}
              style={{
                display: "none",
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding: "8px",
                cursor: "pointer",
                color: "var(--text)",
              }}
              className="hamburger"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                zIndex: 2000,
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(320px, 90vw)",
                background: "var(--card)",
                borderLeft: "1px solid var(--border)",
                zIndex: 2001,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >
                <span
                  style={{
                    fontWeight: "800",
                    fontSize: "20px",
                    color: "var(--primary)",
                  }}
                >
                  Menu
                </span>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    padding: "8px",
                    cursor: "pointer",
                    color: "var(--text)",
                  }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.href}
                    style={{
                      display: "block",
                      padding: "16px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "var(--text)",
                      borderRadius: "var(--radius-md)",
                      textDecoration: "none",
                      transition: "background var(--transition-fast)",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "rgba(0,0,0,0.04)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "transparent")
                    }
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  gap: "10px",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <ThemeToggle />
                <Button
                  href="/assets/documents/ajinkya_resume.pdf"
                  download="ajinkya_resume.pdf"
                  target="_blank"
                  variant="primary"
                  size="sm"
                  style={{ flex: 1 }}
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .cmd-btn { display: none !important; }
          .resume-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
