import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, BookOpen } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
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
          <div className="project-card-inner" style={{ display: "flex" }}>
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
              <motion.span 
                variants={{ hover: { scale: 1.15, rotate: 5, transition: { type: "spring", stiffness: 200 } } }}
                style={{ fontSize: "80px", display: "inline-block" }}
              >
                {index === 0 ? "🛒" : index === 1 ? "🤖" : "📋"}
              </motion.span>
              <span
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
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
          className="projects-stack"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        
        <style>{`
          .project-card-inner {
            flex-direction: column;
          }
          @media (min-width: 900px) {
            .project-card-inner {
              flex-direction: row;
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
  );
}
