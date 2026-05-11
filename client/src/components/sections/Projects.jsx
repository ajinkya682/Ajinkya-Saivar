import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import { featuredProjects } from "../../data/projects";

const projectColors = [
  "linear-gradient(135deg, #1a4d8f22, #3b82f622)",
  "linear-gradient(135deg, #10b98122, #06b6d422)",
  "linear-gradient(135deg, #8b5cf622, #ec489922)",
];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="card"
      style={{ overflow: "hidden" }}
    >
      {/* Project Image / Placeholder */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          background: projectColors[index % projectColors.length],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid var(--border)",
          position: "relative",
        }}
      >
        <span style={{ fontSize: "48px" }}>
          {index === 0 ? "🛒" : index === 1 ? "🤖" : "📋"}
        </span>
        {/* Category badge */}
        <span
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-full)",
            padding: "4px 10px",
            fontSize: "11px",
            fontWeight: "600",
            color: "var(--secondary)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {project.category}
        </span>
      </div>

      <div style={{ padding: "28px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "10px", letterSpacing: "-0.01em" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "14px", color: "var(--secondary)", lineHeight: "1.7", marginBottom: "20px" }}>
          {project.summary}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
          {project.tech.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button href={project.demo} target="_blank" variant="primary" size="sm" icon={<ExternalLink size={14} />}>
            Live Demo
          </Button>
          <Button href={project.github} target="_blank" variant="secondary" size="sm" icon={<Github size={14} />}>
            GitHub
          </Button>
          <Button href={`/projects/${project.slug}`} variant="ghost" size="sm" icon={<BookOpen size={14} />}>
            Case Study
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "56px" }}>
          <SectionHeading
            label="Featured Work"
            title="Projects That Matter"
            description="Handpicked projects that showcase my ability to build complete, production-ready applications."
          />
          <Link
            to="/projects"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--primary)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              whiteSpace: "nowrap",
              flexShrink: 0,
              marginBottom: "56px",
            }}
          >
            View All Projects →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
