import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../components/common/SectionHeading";
import { blogPosts } from "../data/blog";
import { formatDate, getReadingTime } from "../lib/utils";
import { ArrowRight, Clock, Calendar } from "lucide-react";

function BlogListItem({ post, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card"
      style={{ padding: "28px 32px" }}
    >
      <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--primary)", background: "rgba(26,77,143,0.1)", border: "1px solid rgba(26,77,143,0.15)", padding: "2px 10px", borderRadius: "var(--radius-full)", display: "inline-block", marginBottom: "10px" }}>
            {post.category}
          </span>
          <h2 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", letterSpacing: "-0.01em", lineHeight: "1.45", marginBottom: "10px" }}>
            {post.title}
          </h2>
          <p style={{ fontSize: "14px", color: "var(--secondary)", lineHeight: "1.7", marginBottom: "0" }}>
            {post.excerpt}
          </p>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--primary)", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}
        >
          Read Post <ArrowRight size={16} />
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--secondary)" }}>
          <Calendar size={13} /> {formatDate(post.date)}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--secondary)" }}>
          <Clock size={13} /> {getReadingTime(post.content)} min read
        </span>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  return (
    <div style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh", background: "var(--bg)" }}>
      <section style={{ padding: "72px 0 96px" }}>
        <div className="container">
          <SectionHeading
            label="Writing"
            title="Blog"
            description="Thoughts on development, self-learning, freelancing, and building things as a young developer."
            center
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px", margin: "0 auto" }}>
            {blogPosts.map((post, i) => (
              <BlogListItem key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
