import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import SectionHeading from "../common/SectionHeading";
import { staggerContainer, fadeUp } from "../../lib/animations";
import { skillCategories } from "../../data/skills";

function SkillCard({ category, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="card"
      style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}
    >
      {/* Card header */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
        <span style={{ fontSize: "22px" }}>{category.icon}</span>
        <h3 style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "var(--text)",
          letterSpacing: "-0.01em",
        }}>
          {category.title}
        </h3>
      </div>

      {/* Skills list - Animated Badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "auto" }}>
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.4, delay: index * 0.1 + i * 0.05 + 0.2, type: "spring", stiffness: 200, damping: 20 }
              },
              hover: {
                scale: 1.05,
                y: -4,
                borderColor: category.color || "var(--primary)",
                backgroundColor: category.color ? `${category.color}15` : "var(--card)",
                boxShadow: `0 12px 30px -10px ${category.color ? category.color + '66' : 'rgba(0,0,0,0.1)'}`,
                color: category.color || "var(--primary)",
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 18px",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-full)",
              cursor: "default",
              color: "var(--text)",
            }}
          >
            <motion.span 
              className="skill-icon" 
              style={{ display: "flex", transformOrigin: "center" }}
              variants={{
                hover: { 
                  rotate: [0, -15, 15, -10, 10, 0], 
                  scale: 1.25,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }
              }}
            >
              <Icon icon={skill.icon} width={22} height={22} />
            </motion.span>
            <span style={{ fontSize: "14px", fontWeight: "600", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--card)" }}>
      <div className="container">
        <SectionHeading
          label="Capabilities"
          title="Skills & Technologies"
          description="From frontend interfaces to backend systems, I work with modern technologies to build scalable, user-focused applications while continuously expanding my expertise in software engineering."
          center
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {skillCategories.map((category, i) => (
            <SkillCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
