import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import { staggerContainer, fadeUp } from "../../lib/animations";
import { blogPosts } from "../../data/blog";
import { formatDate, getReadingTime } from "../../lib/utils";
import { ArrowRight, Clock, Calendar } from "lucide-react";

function BlogCard({ post, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="card"
      style={{ padding: "28px", display: "flex", flexDirection: "column" }}
    >
      {/* Category tag */}
      <span
        style={{
          display: "inline-block",
          padding: "3px 10px",
          borderRadius: "var(--radius-full)",
          fontSize: "11px",
          fontWeight: "600",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          background: "rgba(26,77,143,0.1)",
          color: "var(--primary)",
          border: "1px solid rgba(26,77,143,0.15)",
          marginBottom: "14px",
          width: "fit-content",
        }}
      >
        {post.category}
      </span>

      <h3
        style={{
          fontSize: "17px",
          fontWeight: "700",
          color: "var(--text)",
          lineHeight: "1.45",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
          flex: 1,
        }}
      >
        {post.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "var(--secondary)",
          lineHeight: "1.7",
          marginBottom: "20px",
        }}
      >
        {post.excerpt}
      </p>

      {/* Meta info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          paddingTop: "16px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "12px",
            color: "var(--secondary)",
          }}
        >
          <Calendar size={13} /> {formatDate(post.date)}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "12px",
            color: "var(--secondary)",
          }}
        >
          <Clock size={13} /> {getReadingTime(post.content)} min read
        </span>
        <Link
          to={`/blog/${post.slug}`}
          style={{
            marginLeft: "auto",
            fontSize: "13px",
            fontWeight: "600",
            color: "var(--primary)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          Read <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Blog() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" style={{ background: "var(--card)" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <SectionHeading
            label="Writing"
            title="From the Blog"
            description="Documenting my journey in software engineering, from self-taught beginnings to building scalable full-stack and AI-powered products."
          />
          <Link
            to="/blog"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--primary)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              whiteSpace: "nowrap",
              marginBottom: "56px",
            }}
          >
            Read All Posts →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {latestPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
