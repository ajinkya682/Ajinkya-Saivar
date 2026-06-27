import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  Home,
  FolderOpen,
  BookOpen,
  Mail,
  Download,
  Sun,
  Moon,
  X,
  Search,
  User,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { useLenis } from 'lenis/react';

const buildItems = (navigate, toggle, isDark, close) => [
  {
    group: "Navigate",
    items: [
      {
        icon: Home,
        label: "Go Home",
        action: () => {
          navigate("/");
          close();
        },
      },
      {
        icon: FolderOpen,
        label: "View Projects",
        action: () => {
          navigate("/projects");
          close();
        },
      },
      {
        icon: BookOpen,
        label: "Read Blog",
        action: () => {
          navigate("/blog");
          close();
        },
      },
      {
        icon: User,
        label: "About Me",
        action: () => {
          navigate("/about");
          close();
        },
      },
      {
        icon: Mail,
        label: "Contact",
        action: () => {
          navigate("/contact");
          close();
        },
      },
    ],
  },
  {
    group: "External",
    items: [
      {
        icon: GithubIcon,
        label: "Open GitHub",
        action: () => {
          window.open("https://github.com/ajinkya682", "_blank");
          close();
        },
      },
      {
        icon: LinkedinIcon,
        label: "Open LinkedIn",
        action: () => {
          window.open("https://linkedin.com/in/ajinkya-saivar", "_blank");
          close();
        },
      },
      {
        icon: Download,
        label: "Download Resume",
        action: () => {
          const link = document.createElement("a");
          link.href = "/assets/documents/ajinkya_resume.pdf";
          link.download = "ajinkya_resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          close();
        },
      },
    ],
  },
  {
    group: "Preferences",
    items: [
      {
        icon: isDark ? Sun : Moon,
        label: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
        action: () => {
          toggle();
          close();
        },
      },
    ],
  },
];

export default function CommandMenu({ open, onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { toggle, isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const lenis = useLenis();

  const items = buildItems(navigate, toggle, isDark, onClose);

  const flatFiltered = items
    .flatMap((g) => g.items.map((item) => ({ ...item, group: g.group })))
    .filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    setActiveIndex(0);
    setQuery("");
    
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown")
        setActiveIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
      if (e.key === "ArrowUp") setActiveIndex((i) => Math.max(i - 1, 0));
      if (e.key === "Enter" && flatFiltered[activeIndex])
        flatFiltered[activeIndex].action();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, flatFiltered, activeIndex, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cmdk-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.95, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -16 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(560px, 90vw)",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            {/* Search Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 20px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <Search
                size={18}
                style={{ color: "var(--secondary)", flexShrink: 0 }}
              />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Type a command or search..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "15px",
                  color: "var(--text)",
                  fontFamily: "'Inter', sans-serif",
                }}
              />
              <button
                onClick={onClose}
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  padding: "4px 6px",
                  cursor: "pointer",
                  color: "var(--secondary)",
                  fontSize: "11px",
                }}
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div
              data-lenis-prevent="true"
              style={{
                maxHeight: "min(380px, 50vh)",
                overflowY: "auto",
                padding: "8px",
                overscrollBehavior: "contain",
              }}
            >
              {flatFiltered.length === 0 && (
                <p
                  style={{
                    textAlign: "center",
                    color: "var(--secondary)",
                    padding: "32px",
                    fontSize: "14px",
                  }}
                >
                  No results for "{query}"
                </p>
              )}
              {flatFiltered.map((item, i) => {
                const Icon = item.icon;
                const isActive = i === activeIndex;
                return (
                  <motion.button
                    key={item.label}
                    onClick={item.action}
                    onMouseEnter={() => setActiveIndex(i)}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "var(--radius-md)",
                      border: "none",
                      background: isActive
                        ? "rgba(26,77,143,0.1)"
                        : "transparent",
                      color: isActive ? "var(--primary)" : "var(--text)",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontFamily: "'Inter', sans-serif",
                      textAlign: "left",
                      transition:
                        "background var(--transition-fast), color var(--transition-fast)",
                    }}
                  >
                    <Icon
                      size={16}
                      style={{
                        color: isActive ? "var(--primary)" : "var(--secondary)",
                        flexShrink: 0,
                      }}
                    />
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
