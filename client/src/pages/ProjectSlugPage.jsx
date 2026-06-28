import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "../data/projects.jsx";

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
    <div style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh", background: "var(--bg)", overflow: "hidden" }}>
      <article style={{ padding: "40px 0 96px" }}>
        <div className="container" style={{ maxWidth: "1400px" }}>
          
          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} style={{ marginBottom: "20px" }}>
            <Link to="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--secondary)", fontSize: "14px", fontWeight: "600", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </motion.div>

          {/* Main Case Study Content - The data handles the premium layout */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}>
            {typeof project.content === 'function' ? project.content({ openLightbox, project }) : project.content}
          </motion.div>

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
        </div>
      </article>
    </div>
  );
}
