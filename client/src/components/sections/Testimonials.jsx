import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="container">
        <SectionHeading
          label="Kind Words"
          title="What Others Say"
          description="Feedback from mentors, peers, and collaborators I've worked with."
          center
        />

        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div
              className="card"
              style={{ padding: "48px", position: "relative", overflow: "hidden", minHeight: "260px" }}
            >
              {/* Quote icon */}
              <Quote
                size={48}
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  color: "var(--border)",
                  opacity: 0.6,
                }}
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Stars */}
                  <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#f59e0b", fontSize: "18px" }}>★</span>
                    ))}
                  </div>

                  <p style={{ fontSize: "17px", color: "var(--text)", lineHeight: "1.8", marginBottom: "32px", fontStyle: "italic" }}>
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#fff",
                      flexShrink: 0,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <p style={{ fontSize: "15px", fontWeight: "700", color: "var(--text)", margin: 0 }}>{t.name}</p>
                      <p style={{ fontSize: "13px", color: "var(--secondary)", margin: "2px 0 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {t.role} · {t.org}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "10px",
                  cursor: "pointer",
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>

              {/* Dots */}
              <div style={{ display: "flex", gap: "8px" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "var(--radius-full)",
                      background: i === current ? "var(--primary)" : "var(--border)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all var(--transition-base)",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "10px",
                  cursor: "pointer",
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
