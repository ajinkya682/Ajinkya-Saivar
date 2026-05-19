import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "../data/blog";
import { formatDate, getReadingTime } from "../lib/utils";
import { fadeUp } from "../lib/animations";

export default function BlogSlugPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{ paddingTop: "calc(var(--navbar-height) + 80px)", minHeight: "60vh", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--text)", marginBottom: "16px" }}>Post Not Found</h1>
          <Link to="/blog" style={{ color: "var(--primary)" }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const readTime = getReadingTime(post.content);

  return (
    <div style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh", background: "var(--bg)" }}>
      <article style={{ padding: "64px 0 96px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>

          {/* Back */}
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} style={{ marginBottom: "40px" }}>
            <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--secondary)", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.span
              variants={fadeUp}
              style={{ fontSize: "11px", fontWeight: "600", color: "var(--primary)", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "12px" }}
            >
              {post.category}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              style={{ fontSize: "clamp(24px, 4.5vw, 40px)", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.03em", lineHeight: "1.15", marginBottom: "20px" }}
            >
              {post.title}
            </motion.h1>

            {/* Meta */}
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid var(--border)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--secondary)" }}>
                <Calendar size={14} /> {formatDate(post.date)}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--secondary)" }}>
                <Clock size={14} /> {readTime} min read
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: "1.85" }}
          >
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} style={{ fontSize: "24px", fontWeight: "700", color: "var(--text)", marginTop: "40px", marginBottom: "16px", letterSpacing: "-0.02em" }}>{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("### ")) {
                return <h3 key={i} style={{ fontSize: "19px", fontWeight: "700", color: "var(--text)", marginTop: "32px", marginBottom: "12px", letterSpacing: "-0.01em" }}>{block.replace("### ", "")}</h3>;
              }
              if (block.startsWith("```")) {
                const code = block.replace(/```[a-z]*/g, "").trim();
                return (
                  <pre key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px", overflowX: "auto", fontSize: "14px", fontFamily: "monospace", lineHeight: "1.7", margin: "24px 0", color: "var(--text)" }}>
                    <code>{code}</code>
                  </pre>
                );
              }
              return <p key={i} style={{ marginBottom: "20px" }}>{block}</p>;
            })}
          </motion.div>

          {/* Tags */}
          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {post.tags.map((tag) => (
              <span key={tag} style={{ padding: "4px 12px", borderRadius: "var(--radius-full)", background: "var(--card)", border: "1px solid var(--border)", fontSize: "12px", color: "var(--secondary)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "500" }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
