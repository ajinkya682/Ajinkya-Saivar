import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { GithubIcon } from "../components/ui/SocialIcons";
import { projects } from "../data/projects";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import { fadeUp } from "../lib/animations";

export default function ProjectSlugPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    if (!project.images) return;
    setLightboxIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    if (!project.images) return;
    setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

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
              <Button href={project.github} target="_blank" variant="secondary" size="md" icon={<GithubIcon size={16} />}>View on GitHub</Button>
            </motion.div>

            {/* Project Images Gallery (Grid) */}
            {project.images && project.images.length > 0 && (
              <motion.div variants={fadeUp} style={{ marginBottom: "56px" }}>
                <div className="project-gallery-grid">
                  {project.images.slice(0, 9).map((img, idx) => {
                    const isLastDesktop = idx === 8 && project.images.length > 9;
                    const isLastMobile = idx === 5 && project.images.length > 6;
                    return (
                      <div
                        key={idx}
                        className={`gallery-item ${idx >= 6 ? 'desktop-only-item' : ''}`}
                        onClick={() => openLightbox(idx)}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "var(--radius-md)",
                          overflow: "hidden",
                          border: "1px solid var(--border)",
                          background: "var(--card)",
                          position: "relative",
                          cursor: "pointer",
                        }}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${idx + 1}`} 
                          style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", transition: "transform 0.3s ease" }} 
                          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                        />
                        {isLastDesktop && (
                          <div className="gallery-overlay desktop-overlay">
                            +{project.images.length - 9} more
                          </div>
                        )}
                        {isLastMobile && (
                          <div className="gallery-overlay mobile-overlay">
                            +{project.images.length - 6} more
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
              {lightboxIndex !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: "rgba(0,0,0,0.9)",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(10px)",
                  }}
                  onClick={closeLightbox}
                >
                  <button onClick={closeLightbox} style={{ position: "absolute", top: "24px", right: "24px", background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10001, transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background="rgba(255,255,255,0.2)"} onMouseOut={(e) => e.currentTarget.style.background="rgba(255,255,255,0.1)"}>
                    <X size={28} />
                  </button>

                  {project.images.length > 1 && (
                    <>
                      <button onClick={prevLightboxImage} style={{ position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10001, transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background="rgba(255,255,255,0.2)"} onMouseOut={(e) => e.currentTarget.style.background="rgba(255,255,255,0.1)"}>
                        <ChevronLeft size={32} />
                      </button>
                      <button onClick={nextLightboxImage} style={{ position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10001, transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background="rgba(255,255,255,0.2)"} onMouseOut={(e) => e.currentTarget.style.background="rgba(255,255,255,0.1)"}>
                        <ChevronRight size={32} />
                      </button>
                    </>
                  )}

                  <div style={{ width: "90%", height: "90%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }} onClick={(e) => e.stopPropagation()}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={lightboxIndex}
                        src={project.images[lightboxIndex]}
                        alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                      />
                    </AnimatePresence>
                    
                    <div style={{ position: "absolute", bottom: "-30px", color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: "500", letterSpacing: "1px" }}>
                      {lightboxIndex + 1} / {project.images.length}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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

      <style>{`
        .project-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
          grid-auto-rows: 200px;
        }
        .gallery-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 700;
          backdrop-filter: blur(2px);
        }
        .mobile-overlay {
          display: none;
        }
        @media (max-width: 768px) {
          .project-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 120px;
            gap: 8px;
          }
          .desktop-only-item {
            display: none !important;
          }
          .desktop-overlay {
            display: none !important;
          }
          .mobile-overlay {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
