import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../ui/SocialIcons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/ajinkya682", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/ajinkya-saivar",
    label: "LinkedIn",
  },
  {
    icon: TwitterIcon,
    href: "https://x.com/Ajinkya_Saivar",
    label: "Twitter",
  },
  { icon: Mail, href: "mailto:ajinkyasaivar66@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--card)",
        padding: "64px 0 32px",
      }}
    >
      <div className="container">
        {/* Three columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                letterSpacing: "-0.04em",
                color: "var(--text)",
                textDecoration: "none",
                display: "block",
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "var(--primary)" }}>A</span>S
            </Link>
            <p
              style={{
                fontSize: "14px",
                color: "var(--secondary)",
                lineHeight: "1.65",
                maxWidth: "240px",
              }}
            >
              Building products, solving problems, and continuously learning.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "var(--text)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Navigation
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  style={{
                    fontSize: "14px",
                    color: "var(--secondary)",
                    textDecoration: "none",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--secondary)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "var(--text)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Connect
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    color: "var(--secondary)",
                    textDecoration: "none",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--secondary)";
                  }}
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--secondary)", margin: 0 }}>
            © {new Date().getFullYear()} Ajinkya Saivar. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "var(--secondary)", margin: 0 }}>
            Built with React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
