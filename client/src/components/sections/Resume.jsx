import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import { fadeUp } from "../../lib/animations";
import { Eye, Download, GraduationCap, Award } from "lucide-react";

const resumeData = {
  education: {
    institution: "Government Institute of Science, Aurangabad",
    degree: "Bachelor of Science (B.Sc.)",
    expected: "2026",
  },
  skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "REST APIs", "Git"],
  projects: ["Full Stack E-Commerce Platform", "AI SaaS Tool", "Task Management Platform"],
  achievements: [
    "Self-taught MERN stack in under 12 months",
    "Delivered first freelance project at age 16",
    "Active open source contributor",
  ],
};

export default function Resume() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resume" style={{ background: "var(--card)" }} ref={ref}>
      <div className="container">
        <SectionHeading
          label="Resume"
          title="Download My Resume"
          description="A concise summary of my education, skills, and projects — available for download."
          center
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          style={{ maxWidth: "720px", margin: "0 auto" }}
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
            <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: "linear-gradient(135deg, var(--primary)22, transparent)", borderRadius: "0 var(--radius-xl) 0 0" }} />

            {/* Header */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "26px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.03em", marginBottom: "4px" }}>
                Ajinkya Saivar
              </h3>
              <p style={{ fontSize: "15px", color: "var(--primary)", fontWeight: "600", margin: 0 }}>
                Full-Stack Developer · MERN Stack
              </p>
            </div>

            {/* Education */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <GraduationCap size={18} style={{ color: "var(--primary)" }} />
                <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>Education</span>
              </div>
              <p style={{ fontSize: "15px", fontWeight: "600", color: "var(--text)", margin: "0 0 4px" }}>{resumeData.education.degree}</p>
              <p style={{ fontSize: "13px", color: "var(--secondary)", margin: 0 }}>{resumeData.education.institution} · Expected {resumeData.education.expected}</p>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: "28px" }}>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
                Top Skills
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {resumeData.skills.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>

            {/* Projects */}
            <div style={{ marginBottom: "28px" }}>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
                Featured Projects
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {resumeData.projects.map((p) => (
                  <div key={p} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", flexShrink: 0 }} />
                    <span style={{ fontSize: "14px", color: "var(--secondary)" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div style={{ marginBottom: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <Award size={18} style={{ color: "var(--primary)" }} />
                <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>Achievements</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {resumeData.achievements.map((a) => (
                  <div key={a} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", flexShrink: 0, marginTop: "7px" }} />
                    <span style={{ fontSize: "14px", color: "var(--secondary)" }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
              <Button href="/resume.pdf" target="_blank" variant="primary" size="md" icon={<Eye size={16} />}>
                View Resume
              </Button>
              <Button href="/resume.pdf" target="_blank" variant="secondary" size="md" icon={<Download size={16} />}>
                Download PDF
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
