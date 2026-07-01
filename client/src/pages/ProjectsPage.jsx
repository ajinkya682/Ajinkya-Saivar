import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, BookOpen, Filter } from "lucide-react";
import { GithubIcon } from "../components/ui/SocialIcons";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import SectionHeading from "../components/common/SectionHeading";
import { projects, categories } from "../data/projects";
import { fadeUp } from "../lib/animations";

const projectEmojis = ["🛒", "🤖", "📋", "🛠️", "💬"];

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
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "sticky",
        top: `calc(120px + ${index * 30}px)`,
        zIndex: index + 1,
        marginBottom: "60px",
      }}
    >
      <Link 
        to={`/projects/${project.slug}`}
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <motion.div
          className="card"
          whileHover="hover"
          style={{ 
            display: "flex", 
            flexDirection: "column",
            overflow: "hidden", 
            background: "var(--card)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            willChange: "transform",
          }}
        >
          <div className={`project-card-inner ${index % 2 === 0 ? 'even' : 'odd'}`} style={{ display: "flex" }}>
            {/* Project Image Side */}
            <div
              className="project-image-side"
              style={{
                flex: "1.2",
                background: projectColors[index % projectColors.length],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                minHeight: "340px",
              }}
            >
              {project.coverImage ? (
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform var(--transition-base)" }}
                  className="project-image-img"
                />
              ) : (
                <motion.span 
                  variants={{ hover: { scale: 1.15, rotate: 5, transition: { type: "spring", stiffness: 200 } } }}
                  style={{ fontSize: "80px", display: "inline-block" }}
                >
                  {index === 0 ? "🛒" : index === 1 ? "🤖" : "📋"}
                </motion.span>
              )}
              <span
                style={{
                  position: "absolute",
                  top: "24px",
                  right: index % 2 === 0 ? "24px" : "auto",
                  left: index % 2 === 1 ? "24px" : "auto",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-full)",
                  padding: "8px 16px",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "var(--primary)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Content Side */}
            <div 
              className="project-content-side"
              style={{ 
                flex: "1", 
                padding: "48px", 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <h3 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", marginBottom: "16px", letterSpacing: "-0.02em", lineHeight: "1.2" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "16px", color: "var(--secondary)", lineHeight: "1.7", marginBottom: "32px", fontWeight: "500" }}>
                {project.summary}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
                {project.tech.slice(0, 5).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ 
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 24px",
                  background: "var(--text)",
                  color: "var(--bg)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "15px", 
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif"
                }}>
                  View Full Project
                  <motion.span
                    variants={{ hover: { x: 6, transition: { type: "spring", stiffness: 300 } } }}
                    style={{ display: "inline-block" }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh", background: "var(--bg)" }}>
      {/* Header Section */}
      <section style={{ padding: "80px 0 40px" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: "800", color: "var(--text)", marginBottom: "20px", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
              Work & Projects
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: "18px", color: "var(--secondary)", lineHeight: "1.7", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
              A complete archive of things I've built, ranging from full-stack SaaS applications to open-source tools and experiments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Feed */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "48px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid",
                  borderColor: filter === cat ? "var(--primary)" : "var(--border)",
                  background: filter === cat ? "var(--primary)" : "transparent",
                  color: filter === cat ? "#fff" : "var(--secondary)",
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

          <div
            className="projects-stack"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "64px 0", color: "var(--secondary)" }}>
                No projects found in this category.
              </motion.div>
            )}
          </div>
          <style>{`
            .project-card-inner {
              flex-direction: column;
            }
            .card:hover .project-image-img {
              transform: scale(1.05) !important;
            }
            @media (min-width: 900px) {
              .project-card-inner.even {
                flex-direction: row;
              }
              .project-card-inner.odd {
                flex-direction: row-reverse;
              }
            }
            @media (max-width: 900px) {
              .project-content-side {
                padding: 32px !important;
              }
              .project-image-side {
                min-height: 240px !important;
              }
              .projects-stack > div {
                position: relative !important;
                top: auto !important;
                margin-bottom: 24px !important;
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
