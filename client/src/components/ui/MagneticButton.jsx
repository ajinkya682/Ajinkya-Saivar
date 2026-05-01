import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({ children, className = "", strength = 0.3, ...props }) {
  const ref = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    posRef.current = {
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    };
    ref.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
  }

  function handleMouseLeave() {
    ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", transition: "transform 0.3s ease" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
