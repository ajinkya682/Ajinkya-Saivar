import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Check } from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "../components/ui/SocialIcons";
import { useState } from "react";
import { blogPosts } from "../data/blog";
import { formatDate, getReadingTime } from "../lib/utils";
import { fadeUp } from "../lib/animations";

export default function BlogSlugPage() {
  const params = useParams();
  const { slug } = params;
  console.log("Current slug:", slug);
  console.log("Available slugs:", blogPosts.map(p => p.slug));
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div style={{ paddingTop: "calc(var(--navbar-height) + 80px)", minHeight: "60vh", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--text)", marginBottom: "16px" }}>Post Not Found for: "{slug}"</h1>
          <Link to="/blog" style={{ color: "var(--primary)" }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const content = post.content || post.excerpt || "Content coming soon...";
  const readTime = post.readingTime || getReadingTime(content);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.03em", lineHeight: "1.15", marginBottom: "32px" }}
            >
              {post.title}
            </motion.h1>

            {/* Author & Meta */}
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "bold", color: "var(--primary)" }}>
                  AS
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: "600", color: "var(--text)" }}>Ajinkya Saivar</div>
                  <div style={{ fontSize: "13px", color: "var(--secondary)", display: "flex", alignItems: "center", gap: "12px", marginTop: "2px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={13} /> {formatDate(post.date)}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> {readTime} min read</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: "17px", color: "var(--text)", lineHeight: "1.85", fontFamily: "var(--font-sans)" }}
          >
            {content.split("\n\n").map((block, i) => {
              // H2
              if (block.startsWith("## ")) {
                return <h2 key={i} style={{ fontSize: "28px", fontWeight: "700", color: "var(--text)", marginTop: "48px", marginBottom: "20px", letterSpacing: "-0.02em" }}>{block.replace("## ", "")}</h2>;
              }
              // H3
              if (block.startsWith("### ")) {
                return <h3 key={i} style={{ fontSize: "22px", fontWeight: "700", color: "var(--text)", marginTop: "36px", marginBottom: "16px", letterSpacing: "-0.01em" }}>{block.replace("### ", "")}</h3>;
              }
              // Blockquote
              if (block.startsWith("> ")) {
                return (
                  <blockquote key={i} style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "24px", margin: "32px 0", fontStyle: "italic", fontSize: "20px", color: "var(--secondary)" }}>
                    {block.replace("> ", "").replace(/"/g, "")}
                  </blockquote>
                );
              }
              // Code block
              if (block.startsWith("```")) {
                const code = block.replace(/```[a-z]*/g, "").trim();
                return (
                  <pre key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px", overflowX: "auto", fontSize: "14px", fontFamily: "monospace", lineHeight: "1.7", margin: "32px 0", color: "var(--text)", boxShadow: "var(--shadow-sm)" }}>
                    <code>{code}</code>
                  </pre>
                );
              }
              // Unordered List
              if (block.startsWith("- ") || block.startsWith("* ")) {
                const items = block.split("\n").map(item => item.replace(/^[-*] /, ""));
                return (
                  <ul key={i} style={{ margin: "24px 0", paddingLeft: "24px", listStyleType: "disc", color: "var(--secondary)" }}>
                    {items.map((item, j) => <li key={j} style={{ marginBottom: "8px" }}>{item}</li>)}
                  </ul>
                );
              }
              // Ordered List
              if (/^\d+\. /.test(block)) {
                const items = block.split("\n").map(item => item.replace(/^\d+\. /, ""));
                return (
                  <ol key={i} style={{ margin: "24px 0", paddingLeft: "24px", listStyleType: "decimal", color: "var(--secondary)" }}>
                    {items.map((item, j) => <li key={j} style={{ marginBottom: "8px" }}>{item}</li>)}
                  </ol>
                );
              }
              // Paragraph
              // Parse simple bold/italic inline (basic regex)
              let parsedBlock = block;
              // Very rudimentary bold parsing
              const parts = parsedBlock.split(/(\*\*.*?\*\*|\*.*?\*)/g);
              
              return (
                <p key={i} style={{ marginBottom: "24px", color: "var(--secondary)" }}>
                  {parts.map((part, index) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={index} style={{ color: "var(--text)" }}>{part.slice(2, -2)}</strong>;
                    }
                    if (part.startsWith("*") && part.endsWith("*")) {
                      return <em key={index}>{part.slice(1, -1)}</em>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </motion.div>

          {/* Footer / Share */}
          <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "32px" }}>
            
            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{ padding: "6px 14px", borderRadius: "var(--radius-full)", background: "var(--card)", border: "1px solid var(--border)", fontSize: "13px", color: "var(--secondary)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "500" }}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--card)", border: "1px solid var(--border)", padding: "24px", borderRadius: "var(--radius-lg)" }}>
              <div style={{ fontSize: "15px", fontWeight: "600", color: "var(--text)" }}>Share this article</div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={handleCopy} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: "transparent", color: "var(--text)", fontSize: "14px", fontWeight: "500", cursor: "pointer", transition: "all 0.2s" }}>
                  {copied ? <><Check size={16} color="var(--success)" /> Copied!</> : <><Share2 size={16} /> Copy Link</>}
                </button>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", color: "var(--text)", transition: "all 0.2s" }}>
                  <TwitterIcon size={18} />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", color: "var(--text)", transition: "all 0.2s" }}>
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </article>
    </div>
  );
}
