import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, BookOpen, Filter } from "lucide-react";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import SectionHeading from "../components/common/SectionHeading";
import { projects, categories } from "../data/projects";

const projectEmojis = ["🛒", "🤖", "📋", "🛠️", "💬"];

function ProjectGridCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="card"
      style={{ overflow: "hidden" }}
    >
      <div style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, var(--border), var(--card))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", borderBottom: "1px solid var(--border)" }}>
        {projectEmojis[index % projectEmojis.length]}
      </div>
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", gap: "12px", marginBottom: "10px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--text)", letterSpacing: "-0.01em", lineHeight: "1.4" }}>{project.title}</h3>
          <span style={{ fontSize: "11px", background: "var(--border)", color: "var(--secondary)", borderRadius: "var(--radius-full)", padding: "2px 8px", whiteSpace: "nowrap", flexShrink: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "600" }}>{project.category}</span>
        </div>
        <p style={{ fontSize: "13px", color: "var(--secondary)", lineHeight: "1.65", marginBottom: "16px" }}>{project.summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "20px" }}>
          {project.tech.slice(0, 4).map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Button href={project.github} target="_blank" variant="secondary" size="sm" icon={<Github size={14} />}>GitHub</Button>
          <Button href={`/projects/${project.slug}`} variant="ghost" size="sm" icon={<BookOpen size={14} />}>Case Study</Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh", background: "var(--bg)" }}>
      <section style={{ padding: "72px 0 48px" }}>
        <div className="container">
          <SectionHeading
            label="All Work"
            title="Projects"
            description="Every project I've built — from side projects to client work. All built with the MERN stack."
            center
          />

          {/* Filter tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "48px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "var(--primary)" : "var(--border)",
                  background: activeCategory === cat ? "var(--primary)" : "transparent",
                  color: activeCategory === cat ? "#fff" : "var(--secondary)",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "all var(--transition-base)",
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {filtered.map((project, i) => (
              <ProjectGridCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
