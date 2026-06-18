import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import { fadeUp } from "../../lib/animations";
import {
  Eye,
  Download,
  GraduationCap,
  Award,
  Briefcase,
  User,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

export default function Resume() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resume" style={{ background: "var(--card)" }} ref={ref}>
      <div className="container">
        <SectionHeading
          label="Detailed Profile"
          title="My Resume"
          description="A quick overview of my experience and top skills. Download the full PDF for a deep dive."
          center
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          style={{ maxWidth: "760px", margin: "0 auto" }}
        >
          <div
            className="card"
            style={{
              padding: "40px",
              background: "var(--bg)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative corner */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "120px",
                height: "120px",
                background:
                  "linear-gradient(135deg, var(--primary)15, transparent)",
                borderRadius: "0 var(--radius-xl) 0 0",
              }}
            />

            {/* Header */}
            <div
              style={{
                marginBottom: "32px",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "var(--text)",
                  letterSpacing: "-0.03em",
                  marginBottom: "8px",
                }}
              >
                Ajinkya Saivar
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--primary)",
                  fontWeight: "600",
                  margin: "0 0 16px 0",
                }}
              >
                Full-Stack Developer · MERN & Next.js
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  fontSize: "13px",
                  color: "var(--secondary)",
                  fontWeight: "500",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <MapPin size={14} /> Maharashtra, India
                </span>
                <a
                  href="mailto:ajinkyasaivar66@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Mail size={14} /> ajinkyasaivar66@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/ajinkya-saivar"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
                <a
                  href="https://github.com/ajinkya-saivar"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              </div>
            </div>

            {/* Summary */}
            <div style={{ marginBottom: "32px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <User size={18} style={{ color: "var(--primary)" }} />
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "var(--text)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0,
                  }}
                >
                  Professional Summary
                </h4>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--secondary)",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Passionate software engineer specializing in building scalable
                SaaS products, AI-powered web applications, and real-time
                systems. Experienced in architecting complex backends,
                orchestrating seamless AI integrations (OpenAI/Mistral), and
                delivering highly optimized, user-centric interfaces.
              </p>
            </div>

            {/* Top Skills */}
            <div style={{ marginBottom: "32px" }}>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "var(--text)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                }}
              >
                Top Technologies
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Socket.io",
                  "WebRTC",
                  "Mistral/Gemini AI",
                  "TailwindCSS",
                ].map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div style={{ marginBottom: "36px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <Award size={18} style={{ color: "var(--primary)" }} />
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "var(--text)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0,
                  }}
                >
                  Key Highlights
                </h4>
              </div>
              <ul
                style={{
                  fontSize: "14px",
                  color: "var(--secondary)",
                  lineHeight: "1.7",
                  paddingLeft: "0",
                  listStyle: "none",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Briefcase
                    size={16}
                    style={{
                      color: "var(--primary)",
                      marginTop: "4px",
                      flexShrink: 0,
                    }}
                  />
                  <span>
                    <strong>TalentIQ (AI-Powered ATS):</strong> Engineered a
                    production-grade SaaS platform featuring Google Gemini
                    resume scoring, serverless WebRTC video interviews, and a
                    multi-tenant Node.js architecture.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Award
                    size={16}
                    style={{
                      color: "#10b981",
                      marginTop: "4px",
                      flexShrink: 0,
                    }}
                  />
                  <span>
                    <strong>Hackathon Winner:</strong> Won the Creative
                    Excellence Award at Sheryians Cohort for building an AI B2B
                    Customer Support platform with real-time Socket.io handoffs.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <GraduationCap
                    size={16}
                    style={{
                      color: "var(--primary)",
                      marginTop: "4px",
                      flexShrink: 0,
                    }}
                  />
                  <span>
                    <strong>Education:</strong> Pursuing B.Sc at Dr. Babasaheb
                    Ambedkar Marathwada University (Expected 2028), alongside
                    advanced Full-Stack Web Development certifications.
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                paddingTop: "24px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <Button
                href="/assets/documents/ajinkya_resume.pdf"
                download="ajinkya_resume.pdf"
                target="_blank"
                variant="secondary"
                size="md"
                icon={<Download size={16} />}
              >
                Download PDF
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
