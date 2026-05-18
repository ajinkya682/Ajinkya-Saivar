import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import { fadeUp } from "../lib/animations";

export default function ProjectSlugPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div style={{ paddingTop: "calc(var(--navbar-height) + 80px)", minHeight: "60vh", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--text)", marginBottom: "16px" }}>Project Not Found</h1>
          <Link to="/projects" style={{ color: "var(--primary)" }}>← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh", background: "var(--bg)" }}>
      <article style={{ padding: "64px 0 96px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>

          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} style={{ marginBottom: "40px" }}>
            <Link to="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--secondary)", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.p variants={fadeUp} style={{ fontSize: "12px", fontWeight: "600", color: "var(--primary)", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
              {project.category}
            </motion.p>
            <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.03em", lineHeight: "1.1", marginBottom: "16px" }}>
              {project.title}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: "18px", color: "var(--secondary)", lineHeight: "1.7", marginBottom: "28px" }}>
              {project.summary}
            </motion.p>

            {/* Tech tags */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
              {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: "12px", marginBottom: "56px", flexWrap: "wrap" }}>
              <Button href={project.demo} target="_blank" variant="primary" size="md" icon={<ExternalLink size={16} />}>Live Demo</Button>
              <Button href={project.github} target="_blank" variant="secondary" size="md" icon={<Github size={16} />}>View on GitHub</Button>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="section-divider" style={{ marginBottom: "56px" }} />

          {/* Case study content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {[
              { label: "The Problem", content: project.problem },
              { label: "The Approach", content: project.approach },
              { label: "Project Description", content: project.description },
              { label: "Impact & Results", content: project.impact },
            ].map(({ label, content }) => (
              <motion.section
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <h2 style={{ fontSize: "22px", fontWeight: "700", color: "var(--text)", marginBottom: "14px", letterSpacing: "-0.02em" }}>{label}</h2>
                <p style={{ fontSize: "16px", color: "var(--secondary)", lineHeight: "1.85" }}>{content}</p>
              </motion.section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
