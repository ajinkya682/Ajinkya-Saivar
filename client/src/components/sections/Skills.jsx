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
      style={{ padding: "28px" }}
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

      {/* Skills list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="skill-icon">
                  <Icon icon={skill.icon} width={18} height={18} />
                </span>
                <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {skill.name}
                </span>
              </div>
              <span style={{ fontSize: "11px", color: "var(--secondary)", fontWeight: "600" }}>
                {skill.level}%
              </span>
            </div>
            {/* Progress bar */}
            <div style={{ height: "4px", background: "var(--border)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08 + 0.3, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: `linear-gradient(to right, var(--primary), ${category.color})`,
                  borderRadius: "var(--radius-full)",
                }}
              />
            </div>
          </div>
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
          description="Technologies I've worked with, currently learning, and am proficient in — built through hands-on projects and continuous practice."
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
