import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { GithubIcon } from "../ui/SocialIcons";

export default function GitHubSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="github" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="container">
        <SectionHeading
          label="Open Source"
          title="GitHub Activity"
          description="Consistent commits, growing stars, and an active streak — real-time stats directly from my GitHub profile."
          center
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Top Row: Stats and Top Langs */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              justifyContent: "center",
            }}
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=ajinkya682&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6366f1&icon_color=6366f1&text_color=c9d1d9&count_private=true&include_all_commits=true"
              alt="GitHub Stats"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "16px",
                background: "#0d1117",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ajinkya682&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6366f1&text_color=c9d1d9&langs_count=8"
              alt="Top Languages"
              style={{
                width: "100%",
                maxWidth: "330px",
                borderRadius: "16px",
                background: "#0d1117",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          </motion.div>

          {/* Streak */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="https://streak-stats.demolab.com?user=ajinkya682&theme=tokyonight&hide_border=true&background=0d1117&ring=6366f1&fire=6366f1&currStreakLabel=6366f1&sideLabels=c9d1d9&dates=c9d1d9"
              alt="GitHub Streak"
              style={{
                width: "100%",
                maxWidth: "804px",
                borderRadius: "16px",
                background: "#0d1117",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          </motion.div>

          {/* Activity Graph */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=ajinkya682&theme=tokyo-night&hide_border=true&bg_color=0d1117&color=6366f1&line=6366f1&point=ffffff&area=true&area_color=6366f1"
              alt="Activity Graph"
              style={{
                width: "100%",
                maxWidth: "804px",
                borderRadius: "16px",
                background: "#0d1117",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          </motion.div>

          {/* Contribution Snake & Trophies */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
              padding: "32px 16px",
              background: "#0d1117",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <h3
              style={{
                color: "#c9d1d9",
                fontSize: "18px",
                fontWeight: "600",
                margin: 0,
              }}
            >
              Contribution Snake
            </h3>
            <img
              src="https://raw.githubusercontent.com/ajinkya682/ajinkya682/output/github-snake-dark.svg"
              alt="Contribution Snake"
              style={{ width: "100%", maxWidth: "800px" }}
            />

            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(255,255,255,0.05)",
                margin: "16px 0",
              }}
            />
          </motion.div>

          {/* View Profile Link */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
            }}
          >
            <a
              href="https://github.com/ajinkya682"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--bg)",
                background: "var(--text)",
                padding: "12px 24px",
                borderRadius: "100px",
                fontWeight: "600",
                fontSize: "15px",
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <GithubIcon size={20} />
              View Full GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
