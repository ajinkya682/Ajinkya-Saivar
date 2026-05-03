import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "../../lib/animations";

export default function SectionHeading({ label, title, description, center = false }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      style={{
        marginBottom: "56px",
        textAlign: center ? "center" : "left",
        maxWidth: center ? "640px" : "100%",
        margin: center ? "0 auto 56px" : "0 0 56px",
      }}
    >
      {label && (
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: "12px",
          }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        style={{
          fontSize: "clamp(28px, 5vw, 44px)",
          fontWeight: "700",
          letterSpacing: "-0.025em",
          color: "var(--text)",
          lineHeight: "1.15",
          marginBottom: description ? "16px" : 0,
        }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "17px",
            color: "var(--secondary)",
            lineHeight: "1.7",
            maxWidth: "580px",
            margin: center ? "0 auto" : "0",
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
