import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import SectionHeading from "../common/SectionHeading";
import Tag from "../ui/Tag";
import { experiences } from "../../data/experience";

function TimelineEntry({ entry, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = entry.side === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 40px 1fr",
        gap: "0",
        alignItems: "start",
        marginBottom: "40px",
      }}
      className="timeline-entry"
    >
      {/* Left content */}
      <div style={{ paddingRight: "32px", textAlign: "right" }} className={isLeft ? "tl-content" : "tl-empty"}>
        {isLeft && <EntryCard entry={entry} />}
      </div>

      {/* Center dot */}
      <div className="tl-dot-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "var(--primary)",
            border: "3px solid var(--bg)",
            boxShadow: `0 0 0 2px var(--primary)`,
            zIndex: 1,
            flexShrink: 0,
            marginTop: "4px",
          }}
        />
      </div>

      {/* Right content */}
      <div style={{ paddingLeft: "32px" }} className={!isLeft ? "tl-content" : "tl-empty"}>
        {!isLeft && <EntryCard entry={entry} />}
      </div>
    </motion.div>
  );
}

function EntryCard({ entry }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "20px 24px",
        textAlign: "left",
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow var(--transition-base), border-color var(--transition-base)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
        <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--primary)", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {entry.date}
        </span>
        <span style={{ fontSize: "11px", color: "var(--secondary)" }}>·</span>
        <span style={{ fontSize: "11px", color: "var(--secondary)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {entry.context}
        </span>
      </div>
      <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--text)", marginBottom: "4px", letterSpacing: "-0.01em" }}>
        {entry.title}
      </h3>
      <p style={{ fontSize: "13px", color: "var(--primary)", fontWeight: "500", marginBottom: "10px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {entry.company}
      </p>
      <p style={{ fontSize: "13px", color: "var(--secondary)", lineHeight: "1.7", marginBottom: "14px" }}>
        {entry.description}
      </p>
      {entry.tags?.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {entry.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 80%", "end 20%"] });

  return (
    <section id="experience" style={{ background: "var(--card)" }}>
      <div className="container">
        <SectionHeading
          label="My Journey"
          title="Experience & Milestones"
          description="A timeline of how I went from knowing nothing about code to building production applications."
          center
        />

        <div ref={containerRef} style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          {/* Animated vertical line */}
          <svg
            className="timeline-line-svg"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="1" y1="0" x2="1" y2="100"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Timeline entries */}
          {experiences.map((entry, i) => (
            <TimelineEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .timeline-line-svg {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          z-index: 0;
        }

        @media (max-width: 768px) {
          .timeline-entry {
            display: flex !important;
            flex-direction: row !important;
            align-items: stretch !important;
            margin-bottom: 32px !important;
          }
          .timeline-line-svg {
            left: 16px !important;
            transform: translateX(-50%) !important;
          }
          .tl-empty { 
            display: none !important; 
          }
          .tl-dot-container {
            order: 1 !important;
            width: 32px !important;
            flex-shrink: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .tl-content { 
            order: 2 !important;
            flex: 1 !important;
            padding-left: 16px !important; 
            padding-right: 0 !important; 
            text-align: left !important; 
          }
        }
      `}</style>
    </section>
  );
}
