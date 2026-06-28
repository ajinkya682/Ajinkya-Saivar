import React from "react";
import { motion } from "framer-motion";
import { Globe, Code } from "lucide-react";

const SpinBadge = () => (
  <div className="spin-badge">
    <svg viewBox="0 0 100 100" width="100" height="100">
      <path
        id="curve"
        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        fill="transparent"
      />
      <text width="500">
        <textPath
          href="#curve"
          fill="var(--text)"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="1.5"
        >
          MODERN WEB ARCHITECTURE • AI POWERED •
        </textPath>
      </text>
    </svg>
    <div className="spin-badge-icon">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// PLACEHOLDER IMAGE COMPONENT
// Replace src with your actual image URLs when ready
// ---------------------------------------------------------------------------
const PlaceholderImg = ({ label, style = {} }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      minHeight: "inherit",
      background:
        "linear-gradient(135deg, var(--border) 0%, color-mix(in srgb, var(--border) 60%, transparent) 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      color: "var(--secondary)",
      fontSize: "13px",
      fontWeight: "600",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      borderRadius: "inherit",
      ...style,
    }}
  >
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.4 }}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
    <span style={{ opacity: 0.5 }}>{label || "Image Placeholder"}</span>
  </div>
);

export const projects = [
  // =========================================================================
  // PROJECT 1 — TalentIQ
  // =========================================================================
  {
    id: 1,
    slug: "talentiq",
    title: "TalentIQ : AI-Powered Talent Intelligence Platform",
    summary:
      "Production-grade SaaS ATS with AI candidate scoring, WebRTC interviews & intelligent hiring analytics.",
    date: "Nov 2023 - Mar 2024",
    role: "Full-Stack Architect",
    tech: [
      "Next.js 14",
      "TypeScript",
      "React 18",
      "TailwindCSS",
      "Zustand",
      "TanStack Query",
      "MongoDB",
      "Mongoose",
      "Google Gemini AI",
      "WebRTC",
      "Socket.io",
      "Inngest",
      "JWT Authentication",
      "Google OAuth2",
      "dnd-kit",
      "Framer Motion",
      "Recharts",
      "Zod",
      "UploadThing",
      "ImageKit",
    ],
    category: "AI",
    github:
      "https://github.com/ajinkya682/Flagship-Portfolio-Projects/tree/main/AI-Powered-Talent-Intelligence-Platform",
    demo: "https://talentiq-demos-projects-8f1fc7b1.vercel.app",
    coverImage:
      "https://media.licdn.com/dms/image/v2/D4D22AQFWC2rcOMWd4w/feedshare-image-high-res/B4DZ7HU4aZIYAU-/0/1781460602030?e=1784160000&v=beta&t=SPFrKNHzjl_5-oPKqwaxKUMcVi_0UE75_LrmXutRS4E",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D22AQFWC2rcOMWd4w/feedshare-image-high-res/B4DZ7HU4aZIYAU-/0/1781460602030?e=1784160000&v=beta&t=SPFrKNHzjl_5-oPKqwaxKUMcVi_0UE75_LrmXutRS4E",
      "https://media.licdn.com/dms/image/v2/D4D22AQFGNxdRvqWkFg/feedshare-image-high-res/B4DZ7gJ9Z2GwAU-/0/1781877168227?e=1784160000&v=beta&t=vqd8ZZG3p0BVrBrlzMM5YRie5_beIonR-ZDxCXOTEmw",
      "https://media.licdn.com/dms/image/v2/D4D22AQGsFf2idRc-gg/feedshare-image-high-res/B4DZ7gJ8drKMAY-/0/1781877164311?e=1784160000&v=beta&t=DBlxkLp0KLd-AfITPZoNqWCMVX4I4hUptpSeTcsj88A",
      "https://media.licdn.com/dms/image/v2/D4D22AQG_1fznM7027g/feedshare-image-high-res/B4DZ7gJ9DEI0AY-/0/1781877166897?e=1784160000&v=beta&t=GQc25QNsQczMRgPNmU4jIQGsSFeDvIFUAe7QnM_EADA",
      "https://media.licdn.com/dms/image/v2/D4D22AQHVpNZ4kXTVFw/feedshare-image-high-res/B4DZ7HU4NoJ0AU-/0/1781460600665?e=1784160000&v=beta&t=Gtckel8_pDWh8uiJn8upwn8cSlo5Tv8V2zEMB6bya6c",
      "https://media.licdn.com/dms/image/v2/D4D22AQG_1KcqNmIiKw/feedshare-image-high-res/B4DZ7HU4MCGYAU-/0/1781460600662?e=1784160000&v=beta&t=D_FabwedAq1c_SSQ14jwH1gKnyDaPvLExrUvDRweJSg",
      "https://media.licdn.com/dms/image/v2/D4D22AQHkN86Pl6-kWA/feedshare-image-high-res/B4DZ7HU4MBHQAU-/0/1781460600697?e=1784160000&v=beta&t=FZT1X2KZRf_crC_nsU7LH-2Kmo4vhIX1D6J-vDmIX0Q",
      "https://media.licdn.com/dms/image/v2/D4D22AQHNMpjBR00X4w/feedshare-image-high-res/B4DZ7HU4R.H0Ac-/0/1781460601072?e=1784160000&v=beta&t=xHXnEhyR2b0wWCDMnofGtITzB2nQoCcUTtOVtZS1Plc",
      "https://media.licdn.com/dms/image/v2/D4D22AQG1cu0Jk2CIvw/feedshare-image-high-res/B4DZ7HU4JlI0AU-/0/1781460600371?e=1784160000&v=beta&t=B4VsJ4WcK2NXa7GL1VQ_XG5Ey7Fhas3kYYvj7fH1N1A",
      "https://media.licdn.com/dms/image/v2/D4D22AQH9LVvHHOZnvA/feedshare-image-high-res/B4DZ7HU3gNHYAU-/0/1781460597867?e=1784160000&v=beta&t=ykP_iKSnn7NoUuoU1zmj38LsOsxZV0Rumt9-Rp1ipOM",
      "https://media.licdn.com/dms/image/v2/D4D22AQGhp1MhTn4VZg/feedshare-image-high-res/B4DZ7HU4PVGYAY-/0/1781460601031?e=1784160000&v=beta&t=RXKcZNzmbTSfhaeWol2yyM-itOqcnkfcN7h9CBnMWPc",
      "https://media.licdn.com/dms/image/v2/D4D22AQFKZg0RsndDVg/feedshare-image-high-res/B4DZ7HU4JnHEAU-/0/1781460600512?e=1784160000&v=beta&t=jsIljB2QFgiBj-U_Mcy_SNFH27nOODk8KKpyPjZgplc",
      "https://media.licdn.com/dms/image/v2/D4D22AQEzeLHGrcpWBg/feedshare-image-high-res/B4DZ7HU4VRIEAU-/0/1781460601571?e=1784160000&v=beta&t=hybxopbLA8Htxv9yivFFMAexOczbPlUwgIuhdFV8zSw",
      "https://media.licdn.com/dms/image/v2/D4D22AQE7okn7xSdcNQ/feedshare-image-high-res/B4DZ7HU4PKJcAU-/0/1781460600180?e=1784160000&v=beta&t=MZY6LOxkuZOdVRdYFpR3OVPJgVpiYvFCHlLtFoMkjbw",
    ],
    featured: true,
    content: ({ openLightbox, project }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "96px" }}>
        {/* Hero */}
        <motion.section
          className="bento-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="project-title-editorial">
              TalentIQ
              <br />
              Platform
            </h1>
            <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--secondary)",
                    fontWeight: "600",
                  }}
                >
                  Date
                </p>
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  Nov 2023 - Mar 2024
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--secondary)",
                    fontWeight: "600",
                  }}
                >
                  Role
                </p>
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  Full-Stack Architect
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "20px",
                color: "var(--secondary)",
                lineHeight: "1.8",
                maxWidth: "400px",
                marginBottom: "32px",
              }}
            >
              A production-grade SaaS ATS with AI candidate scoring, WebRTC
              interviews & intelligent hiring analytics — built from the ground
              up as an AI-native platform.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="https://talentiq-demos-projects-8f1fc7b1.vercel.app"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                <Globe size={18} /> Live Demo
              </a>
              <a
                href="https://github.com/ajinkya682/Flagship-Portfolio-Projects/tree/main/AI-Powered-Talent-Intelligence-Platform"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "transparent",
                  border: "2px solid var(--border)",
                  color: "var(--text)",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                <Code size={18} /> Source Code
              </a>
            </div>
          </div>
          <div
            className="bento-image-wrapper bento-h-600"
            style={{ cursor: "pointer" }}
            onClick={() => openLightbox(0)}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4D22AQFWC2rcOMWd4w/feedshare-image-high-res/B4DZ7HU4aZIYAU-/0/1781460602030?e=1784160000&v=beta&t=SPFrKNHzjl_5-oPKqwaxKUMcVi_0UE75_LrmXutRS4E"
              alt="TalentIQ Cover"
            />
            <div className="pill-btn">
              View all 14 images{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </motion.section>

        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-text">
            NEXT.JS 14 • TYPESCRIPT • GEMINI AI • WEBRTC • MONGODB • TAILWIND
            CSS • ZUSTAND • NEXT.JS 14 • TYPESCRIPT • GEMINI AI • WEBRTC •
            MONGODB • TAILWIND CSS • ZUSTAND •
          </div>
        </div>

        {/* Sidebar + Grid */}
        <motion.section
          className="bento-grid-asym"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="sticky-sidebar"
            style={{ position: "sticky", top: "120px", alignSelf: "start" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                marginBottom: "24px",
              }}
            >
              The Problem & Approach
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--secondary)",
                lineHeight: "1.85",
                marginBottom: "24px",
              }}
            >
              Modern hiring teams are overwhelmed by the volume and complexity
              of recruitment. Traditional ATS platforms are passive — they store
              resumes but offer no intelligence.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "var(--secondary)",
                lineHeight: "1.85",
              }}
            >
              The architecture was designed from the ground up as a
              production-grade, AI-native SaaS. We utilized Gemini 2.5 Flash for
              scoring resumes and WebRTC for native video interviews, routing
              candidates through a beautiful Kanban pipeline.
            </p>
            <div
              style={{
                marginTop: "40px",
                position: "relative",
                height: "200px",
              }}
            >
              <SpinBadge />
            </div>
          </div>
          <div className="bento-grid">
            <div
              className="bento-image-wrapper bento-h-300"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(3)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQG_1fznM7027g/feedshare-image-high-res/B4DZ7gJ9DEI0AY-/0/1781877166897?e=1784160000&v=beta&t=GQc25QNsQczMRgPNmU4jIQGsSFeDvIFUAe7QnM_EADA"
                alt="App view"
              />
            </div>
            <div
              className="bento-image-wrapper bento-h-300"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(7)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQHNMpjBR00X4w/feedshare-image-high-res/B4DZ7HU4R.H0Ac-/0/1781460601072?e=1784160000&v=beta&t=xHXnEhyR2b0wWCDMnofGtITzB2nQoCcUTtOVtZS1Plc"
                alt="App view"
              />
            </div>
            <div
              className="bento-image-wrapper bento-h-400 bento-full-col"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(10)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQGhp1MhTn4VZg/feedshare-image-high-res/B4DZ7HU4PVGYAY-/0/1781460601031?e=1784160000&v=beta&t=RXKcZNzmbTSfhaeWol2yyM-itOqcnkfcN7h9CBnMWPc"
                alt="App view large"
              />
              {/* <div className="pill-btn pill-center">
                Kanban Board{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div> */}
            </div>
          </div>
        </motion.section>

        {/* Lower Bento */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(11)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQFKZg0RsndDVg/feedshare-image-high-res/B4DZ7HU4JnHEAU-/0/1781460600512?e=1784160000&v=beta&t=jsIljB2QFgiBj-U_Mcy_SNFH27nOODk8KKpyPjZgplc"
                alt="Detail 1"
              />
              {/* <div className="pill-btn pill-center">WebRTC Interviews</div> */}
            </div>
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(12)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQEzeLHGrcpWBg/feedshare-image-high-res/B4DZ7HU4VRIEAU-/0/1781460601571?e=1784160000&v=beta&t=hybxopbLA8Htxv9yivFFMAexOczbPlUwgIuhdFV8zSw"
                alt="Detail 2"
              />
              {/* <div className="pill-btn pill-center">Analytics</div> */}
            </div>
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(6)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQHkN86Pl6-kWA/feedshare-image-high-res/B4DZ7HU4MBHQAU-/0/1781460600697?e=1784160000&v=beta&t=FZT1X2KZRf_crC_nsU7LH-2Kmo4vhIX1D6J-vDmIX0Q"
                alt="Detail 3"
              />
              {/* <div className="pill-btn pill-center">Job Portal</div> */}
            </div>
          </div>
        </motion.section>
      </div>
    ),
  },

  // =========================================================================
  // PROJECT 2 — SupportBotAI
  // =========================================================================
  {
    id: 2,
    slug: "supportbotai",
    title: "SupportBotAI : AI-Powered B2B Customer Support Platform",
    summary:
      "Multi-tenant SaaS chatbot with real-time human handoff, workload-aware routing, and browser push notifications.",
    date: "Apr 2024 - Jun 2024",
    role: "Lead Developer",
    tech: [
      "React 19",
      "Redux Toolkit",
      "Vite",
      "Node.js",
      "Express 5",
      "Socket.IO",
      "MongoDB",
      "Mongoose",
      "MistralAI",
      "Web Push API",
      "Puppeteer",
      "Cheerio",
      "Agenda",
      "Google OAuth2",
      "Resend",
      "ImageKit",
      "JWT Authentication",
      "Framer Motion",
      "Recharts",
    ],
    category: "AI",
    github: "https://github.com/ajinkya682/SupportBotAI",
    demo: "https://supportbotai.vercel.app",
    coverImage:
      "https://media.licdn.com/dms/image/v2/D4D22AQFdb5BzS5RRMg/feedshare-image-high-res/B4DZ4qDMm2JUAU-/0/1778821942663?e=1784160000&v=beta&t=vXiyvd1tyjKoR8_KcIQhRTcTB--UySyW63exV0iXXoI",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D22AQFdb5BzS5RRMg/feedshare-image-high-res/B4DZ4qDMm2JUAU-/0/1778821942663?e=1784160000&v=beta&t=vXiyvd1tyjKoR8_KcIQhRTcTB--UySyW63exV0iXXoI",
      "https://media.licdn.com/dms/image/v2/D4D22AQEOFND9esy0zg/feedshare-image-high-res/B4DZ4qEYncKcAU-/0/1778822254008?e=1784160000&v=beta&t=lmizeiPDRWKBJXg-SN3FNs33vVfI6lAqLvXWjlm1jvI",
      "https://media.licdn.com/dms/image/v2/D4D22AQFAtMJ0JI8ATw/feedshare-image-high-res/B4DZ4qEUdKI0AY-/0/1778822236920?e=1784160000&v=beta&t=jS95m692Mp1iE3psJFhyiDo_Y7V8dGo7w86kIRCeka0",
      "https://media.licdn.com/dms/image/v2/D4D22AQFdwP8oCj_6fA/feedshare-image-high-res/B4DZ4qEaMlIMAU-/0/1778822260496?e=1784160000&v=beta&t=gjBVQSCPkM5-Gr-f7j7Twx2fjzTEoTgrSUYf51-8oyc",
      "https://media.licdn.com/dms/image/v2/D4D22AQFKVMoigyHixw/feedshare-image-high-res/B4DZ4qEZc9KcAU-/0/1778822257485?e=1784160000&v=beta&t=O5IdUdKm4ioKgTX_3Ykszsd1qtYrhhH1boNlepdNTqY",
      "https://media.licdn.com/dms/image/v2/D4D22AQFw-sUE3VFOuA/feedshare-image-high-res/B4DZ4qEa0QKEAU-/0/1778822262478?e=1784160000&v=beta&t=I-5flxksp3VV-gRKMs9RVD-C-OA7cMLs_0X-B0h0ZYY",
      "https://media.licdn.com/dms/image/v2/D4D22AQEQScv83NFfKg/feedshare-shrink_1280/B4DZ4qEcLdKcAM-/0/1778822268339?e=1784160000&v=beta&t=FZo1w8adpPBH2PtZD4pSaoxqV9Coggg5xStpObjVZ3w",
      "https://media.licdn.com/dms/image/v2/D4D22AQFQh2n1v3j_-Q/feedshare-image-high-res/B4DZ4qEa8LI8AY-/0/1778822262898?e=1784160000&v=beta&t=69NBjZDYvRU6U736JwU3q2YnWWNXqaINSBX_WuLClRk",
      "https://media.licdn.com/dms/image/v2/D4D22AQGmH8gbg16XXg/feedshare-image-high-res/B4DZ4qEbZVIUAY-/0/1778822265393?e=1784160000&v=beta&t=eFRk7vLPzIaRfd5aXsJ5Zc_8-cob8vrkR5MyUSU5-nU",
      "https://media.licdn.com/dms/image/v2/D4D22AQGQy3gt9seHLw/feedshare-image-high-res/B4DZ4qEbv2JUAU-/0/1778822267156?e=1784160000&v=beta&t=kJJtUUe4ldWE_rbiCVb4w7wENVmWnDA0DXhvfb1rFZ0",
      "https://media.licdn.com/dms/image/v2/D4D22AQFzuPRVAwnHIw/feedshare-image-high-res/B4DZ4qEbNeJsAU-/0/1778822264596?e=1784160000&v=beta&t=1eTce6HCvWwX6F61Bme4fwtZeLz_JNQiboqsgWDn9y4",
      "https://media.licdn.com/dms/image/v2/D4D22AQH12RpooXCLdA/feedshare-image-high-res/B4DZ4qEbqZJUAU-/0/1778822266001?e=1784160000&v=beta&t=6G6h5FeQjEgrxi33cgVnbeEm56cS_m3jf50OBXpPlNo",
      "https://media.licdn.com/dms/image/v2/D4D22AQHl5vG9VtStOw/feedshare-image-high-res/B4DZ4qEa0MHMAU-/0/1778822262997?e=1784160000&v=beta&t=DwxEAYH4uLbtPDiG09VAGOjZvMnxDkl384qFebanD_Q",
      "https://media.licdn.com/dms/image/v2/D4D22AQG8N7O42jqnzA/feedshare-image-high-res/B4DZ4qEbKcHMAU-/0/1778822264892?e=1784160000&v=beta&t=9H39IX5Oc4gb-kz7XgWETeJqlO6u9NzhGZfM_I_ViC4",
      "https://media.licdn.com/dms/image/v2/D4D22AQGU02t0m8PLyQ/feedshare-image-high-res/B4DZ4qEbygJQAU-/0/1778822267015?e=1784160000&v=beta&t=o6u3z1Dqroa2l-Qw5zoqlO9If_3j2Gq16hVhyB-4eL8",
    ],
    featured: true,
    content: ({ openLightbox, project }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "96px" }}>
        {/* Hero */}
        <motion.section
          className="bento-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="project-title-editorial">
              SupportBot
              <br />
              AI
            </h1>
            <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--secondary)",
                    fontWeight: "600",
                  }}
                >
                  Date
                </p>
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  Apr 2024 - Jun 2024
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--secondary)",
                    fontWeight: "600",
                  }}
                >
                  Role
                </p>
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  Lead Developer
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "20px",
                color: "var(--secondary)",
                lineHeight: "1.8",
                maxWidth: "400px",
                marginBottom: "32px",
              }}
            >
              A multi-tenant SaaS chatbot with real-time human handoff,
              workload-aware routing, and a MistralAI engine — built under
              48-hour hackathon pressure.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="https://supportbotai.vercel.app"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                <Globe size={18} /> Live Demo
              </a>
              <a
                href="https://github.com/ajinkya682/SupportBotAI"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "transparent",
                  border: "2px solid var(--border)",
                  color: "var(--text)",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                <Code size={18} /> Source Code
              </a>
            </div>
          </div>
          <div
            className="bento-image-wrapper bento-h-600"
            style={{ cursor: "pointer" }}
            onClick={() => openLightbox(0)}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4D22AQFdb5BzS5RRMg/feedshare-image-high-res/B4DZ4qDMm2JUAU-/0/1778821942663?e=1784160000&v=beta&t=vXiyvd1tyjKoR8_KcIQhRTcTB--UySyW63exV0iXXoI"
              alt="Cover"
            />
            <div className="pill-btn">
              View all 15 images{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </motion.section>

        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-text">
            REACT 19 • REDUX TOOLKIT • EXPRESS 5 • MISTRAL AI • MONGODB •
            SOCKET.IO • REACT 19 • REDUX TOOLKIT • EXPRESS 5 • MISTRAL AI •
            MONGODB • SOCKET.IO •
          </div>
        </div>

        {/* Sidebar + Grid */}
        <motion.section
          className="bento-grid-asym"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="sticky-sidebar"
            style={{ position: "sticky", top: "120px", alignSelf: "start" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                marginBottom: "24px",
              }}
            >
              The Problem & Approach
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--secondary)",
                lineHeight: "1.85",
                marginBottom: "24px",
              }}
            >
              Small and mid-sized businesses struggle to provide responsive
              customer support without hiring large support teams. Generic
              chatbots either over-escalate or give low-quality canned
              responses.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "var(--secondary)",
                lineHeight: "1.85",
              }}
            >
              We engineered a dual-layer AI and real-time infrastructure with
              confidence-based escalation routing — built under intense pressure
              during a 48-hour hackathon.
            </p>
            <div
              style={{
                marginTop: "40px",
                position: "relative",
                height: "200px",
              }}
            >
              <SpinBadge />
            </div>
          </div>
          <div className="bento-grid">
            <div
              className="bento-image-wrapper bento-h-300"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(1)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQEOFND9esy0zg/feedshare-image-high-res/B4DZ4qEYncKcAU-/0/1778822254008?e=1784160000&v=beta&t=lmizeiPDRWKBJXg-SN3FNs33vVfI6lAqLvXWjlm1jvI"
                alt="App view"
              />
            </div>
            <div
              className="bento-image-wrapper bento-h-300"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(3)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQFdwP8oCj_6fA/feedshare-image-high-res/B4DZ4qEaMlIMAU-/0/1778822260496?e=1784160000&v=beta&t=gjBVQSCPkM5-Gr-f7j7Twx2fjzTEoTgrSUYf51-8oyc"
                alt="App view"
              />
            </div>
            <div
              className="bento-image-wrapper bento-h-400 bento-full-col"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(4)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQFKVMoigyHixw/feedshare-image-high-res/B4DZ4qEZc9KcAU-/0/1778822257485?e=1784160000&v=beta&t=O5IdUdKm4ioKgTX_3Ykszsd1qtYrhhH1boNlepdNTqY"
                alt="App view large"
              />
              {/* <div className="pill-btn pill-center">
                AI Dashboard{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div> */}
            </div>
          </div>
        </motion.section>

        {/* Lower Bento */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(2)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQFAtMJ0JI8ATw/feedshare-image-high-res/B4DZ4qEUdKI0AY-/0/1778822236920?e=1784160000&v=beta&t=jS95m692Mp1iE3psJFhyiDo_Y7V8dGo7w86kIRCeka0"
                alt="Detail 1"
              />
              {/* <div className="pill-btn pill-center">Integration</div> */}
            </div>
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(12)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQHl5vG9VtStOw/feedshare-image-high-res/B4DZ4qEa0MHMAU-/0/1778822262997?e=1784160000&v=beta&t=DwxEAYH4uLbtPDiG09VAGOjZvMnxDkl384qFebanD_Q"
                alt="Detail 2"
              />
              {/* <div className="pill-btn pill-center">Chat Flow</div> */}
            </div>
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(11)}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQH12RpooXCLdA/feedshare-image-high-res/B4DZ4qEbqZJUAU-/0/1778822266001?e=1784160000&v=beta&t=6G6h5FeQjEgrxi33cgVnbeEm56cS_m3jf50OBXpPlNo"
                alt="Detail 3"
              />
              {/* <div className="pill-btn pill-center">Routing</div> */}
            </div>
          </div>
        </motion.section>
      </div>
    ),
  },

  // =========================================================================
  // PROJECT 3 — FreshHarvest
  // =========================================================================
  {
    id: 3,
    slug: "freshharvest",
    title: "FreshHarvest : Full-Stack Grocery E-Commerce Platform",
    summary:
      "Production-grade grocery ordering platform with WhatsApp checkout, admin analytics dashboard, MongoDB transactions & 9-layer security — built for local Indian stores.",
    date: "Jul 2024 - Sep 2024",
    role: "Full-Stack Developer",
    tech: [
      "React 19",
      "Vite 7",
      "React Router v7",
      "TailwindCSS",
      "Framer Motion",
      "Recharts",
      "Axios",
      "Node.js",
      "Express 4",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "bcryptjs",
      "ImageKit CDN",
      "Multer",
      "express-validator",
      "Helmet",
      "CORS",
      "express-rate-limit",
      "express-mongo-sanitize",
      "Winston",
      "Morgan",
      "Vercel",
      "Render",
    ],
    category: "E-Commerce",
    github: "https://github.com/ajinkya682/Grocery-Store",
    demo: "https://grocery-store-mu-roan.vercel.app",
    coverImage:
      "https://media.licdn.com/dms/image/v2/D4D22AQGiH42Bsp4fdQ/feedshare-image-high-res/B4DZ8Oo5lPI0AU-/0/1782657031681?e=1784160000&v=beta&t=GEXFeyoIlhAhD0LNo5IVwQsbRIf89DcJVyU6HMpVHrQ",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D22AQGiH42Bsp4fdQ/feedshare-image-high-res/B4DZ8Oo5lPI0AU-/0/1782657031681?e=1784160000&v=beta&t=GEXFeyoIlhAhD0LNo5IVwQsbRIf89DcJVyU6HMpVHrQ",
      "https://media.licdn.com/dms/image/v2/D4D22AQEofRIk52T5zQ/feedshare-image-high-res/B4DZ8OopYeI4AU-/0/1782656965194?e=1784160000&v=beta&t=LRSdWuG5Ll6PUu3qvwS82IihC3LIngNMuoadz8V1ozw",
      "https://media.licdn.com/dms/image/v2/D4D22AQHNVc0YAg2PBA/feedshare-image-high-res/B4DZ8OoxEwKYAU-/0/1782656996738?e=1784160000&v=beta&t=1P3QVlpDgP_WdsAjeecC0xL3_TDSgO5ZP8rXeljfqu0",
      "https://media.licdn.com/dms/image/v2/D4D22AQHC3BUGirJybQ/feedshare-image-high-res/B4DZ8OoCIiJcAU-/0/1782656804305?e=1784160000&v=beta&t=W1zqLpjmBTNSdHR-f225-tH5pviJFHz34-JWiACRtt4",
      "https://media.licdn.com/dms/image/v2/D4D22AQHPV6OXrMTBDw/feedshare-image-high-res/B4DZ8OoBe5KYAU-/0/1782656801761?e=1784160000&v=beta&t=IHtoFxpklC1wAQA7iUgLbNULzayeopEpuR4ODd6oSn0",
      "https://media.licdn.com/dms/image/v2/D4D22AQHQv0zYUhgU4A/feedshare-image-high-res/B4DZ8Ooq2UJcAY-/0/1782656971090?e=1784160000&v=beta&t=RdxMty3fBEJSfaxRnPLhEuF8SWxiRVRkxCLEyyKRZoY",
      "https://media.licdn.com/dms/image/v2/D4D22AQHiI84-YENe7A/feedshare-image-high-res/B4DZ8OnvSFHgAY-/0/1782656727134?e=1784160000&v=beta&t=qNHmixrX2bAD58O-Pz8DlM78kYdt3HUk2XSyBY53-E4",
      "https://media.licdn.com/dms/image/v2/D4D22AQHFcIWsYPxQOw/feedshare-image-high-res/B4DZ8Ooj1mI8Ac-/0/1782656942676?e=1784160000&v=beta&t=mLOH8bEOFp_a8vtWeqzRXBg7C2791PQ4CMe9gWx_Ci8",
      "https://media.licdn.com/dms/image/v2/D4D22AQEr-KqyxnuwHQ/feedshare-image-high-res/B4DZ8OoTUtJAAY-/0/1782656874687?e=1784160000&v=beta&t=pU31udIMBP77VfkTEdCZ80Y4WIh86Cy6Y78f-QgUCmc",
      "https://media.licdn.com/dms/image/v2/D4D22AQEUSkL-ZpK99g/feedshare-image-high-res/B4DZ8OnrlyHgAU-/0/1782656711709?e=1784160000&v=beta&t=8E1-TK7ONlqk-EhugcjjNwZ_kcqzRG5JuRoyW9wGFgI",
      "https://media.licdn.com/dms/image/v2/D4D22AQE5T2sPpCqtZg/feedshare-image-high-res/B4DZ8OoPVSGYAU-/0/1782656858434?e=1784160000&v=beta&t=qVVTWhWArExk8XEzVZR2zVxZXXGmZq1hY9D9tixhSXM",
      "https://media.licdn.com/dms/image/v2/D4D22AQHuOxiTM0MQ8g/feedshare-image-high-res/B4DZ8OogEiIYAU-/0/1782656927056?e=1784160000&v=beta&t=TBjDTCXFbdHb7D8R37j8_48jdeLBgCQaC7GHkZhZJkU",
      "https://media.licdn.com/dms/image/v2/D4D22AQF1DZMEkM7o4Q/feedshare-image-high-res/B4DZ8Ontx_H0AU-/0/1782656720835?e=1784160000&v=beta&t=rARbCbKlLBOip5CS23hTWxNI1p1EaigJLVzgXfdEyfY",
      "https://media.licdn.com/dms/image/v2/D4D22AQGzE_8PI-kDug/feedshare-image-high-res/B4DZ8OnzrhHgAU-/0/1782656745095?e=1784160000&v=beta&t=nSKUNlI7ZjQik_5dD0y5QB3ow6A2b8JB1p3GcxtTN2A",
      "https://media.licdn.com/dms/image/v2/D4D22AQGcBKQjyDgi-w/feedshare-image-high-res/B4DZ8On0rzJAAU-/0/1782656749416?e=1784160000&v=beta&t=8tDeRoMHG-D2OiGjiWmiUahVFu7zLcOMMjVrG6AlfjE",
      "https://media.licdn.com/dms/image/v2/D4D22AQEi8-1tq2eDSg/feedshare-image-high-res/B4DZ8OnvgtJcAU-/0/1782656728158?e=1784160000&v=beta&t=7y_ITZCTXPZx72YYkoAe_sNhbxjzKTMtqQy7usC0CRA",
      "https://media.licdn.com/dms/image/v2/D4D22AQGAx-kkDjQRAA/feedshare-image-high-res/B4DZ8On2D2KYAU-/0/1782656754982?e=1784160000&v=beta&t=OojDPV8oF4aqI21R9vA2vV-1rMz0P-QLsG0WwnRpung",
      "https://media.licdn.com/dms/image/v2/D4D22AQFo4TWaOVZyKA/feedshare-image-high-res/B4DZ8OnztHI4AU-/0/1782656745269?e=1784160000&v=beta&t=zS8uPWwjuMfkMs3Shwpt69j9VXy6FRmK1fAz_wKx9LY",
      "https://media.licdn.com/dms/image/v2/D4D22AQFUgUrXyft8aw/feedshare-image-high-res/B4DZ8Onv9XI8AY-/0/1782656729768?e=1784160000&v=beta&t=zea9H-__7Fq0VsBbvSDAEH-rV0-bNTqpTdphdcshpXo",
      "https://media.licdn.com/dms/image/v2/D4D22AQGuZKPgDFFthQ/feedshare-image-high-res/B4DZ8OnverIEAY-/0/1782656728026?e=1784160000&v=beta&t=By4EXVqetXst5Rpi3LM9A19q0ku0cpQEJQlcIzIyupo",
    ],
    featured: true,
    content: ({ openLightbox, project }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "96px" }}>
        {/* Hero */}
        <motion.section
          className="bento-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="project-title-editorial">
              Fresh
              <br />
              Harvest
            </h1>
            <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--secondary)",
                    fontWeight: "600",
                  }}
                >
                  Date
                </p>
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  Jul 2024 - Sep 2024
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--secondary)",
                    fontWeight: "600",
                  }}
                >
                  Role
                </p>
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "20px",
                color: "var(--secondary)",
                lineHeight: "1.8",
                maxWidth: "400px",
                marginBottom: "32px",
              }}
            >
              A production-deployed grocery e-commerce platform with
              WhatsApp-first checkout, real MongoDB aggregation-powered
              analytics, and a 9-layer security stack — purpose-built for local
              Indian stores.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="https://grocery-store-mu-roan.vercel.app"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                <Globe size={18} /> Live Demo
              </a>
              <a
                href="https://github.com/ajinkya682/FreshHarvest"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "transparent",
                  border: "2px solid var(--border)",
                  color: "var(--text)",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                <Code size={18} /> Source Code
              </a>
            </div>
          </div>
          {/* PLACEHOLDER: replace PlaceholderImg with a real <img> tag once you have the URL */}
          <div
            className="bento-image-wrapper bento-h-600"
            style={{ cursor: "pointer" }}
            onClick={() => openLightbox(0)}
          >
            <img
              src={project?.coverImage || project?.images?.[0]}
              alt="Cover"
            />
            <div className="pill-btn">
              View all 20 images{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </motion.section>

        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-text">
            REACT 19 • NODE.JS • EXPRESS • MONGODB • TAILWIND CSS • IMAGEKIT CDN
            • JWT • WHATSAPP CHECKOUT • RECHARTS • FRAMER MOTION • REACT 19 •
            NODE.JS • EXPRESS • MONGODB •
          </div>
        </div>

        {/* Sidebar + Grid */}
        <motion.section
          className="bento-grid-asym"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="sticky-sidebar"
            style={{ position: "sticky", top: "120px", alignSelf: "start" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                marginBottom: "24px",
              }}
            >
              The Problem & Approach
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--secondary)",
                lineHeight: "1.85",
                marginBottom: "24px",
              }}
            >
              Small grocery stores in India rely on phone calls, WhatsApp
              messages, and walk-in customers. They have no digital storefront,
              no analytics, and no way to compete with large chains online.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "var(--secondary)",
                lineHeight: "1.85",
              }}
            >
              FreshHarvest solves this with a WhatsApp-first checkout flow that
              requires zero payment gateway setup, a mobile+PIN login designed
              for low-tech users, and a full admin portal with real MongoDB
              aggregation analytics — all at near-zero hosting cost.
            </p>
            <div
              style={{
                marginTop: "40px",
                position: "relative",
                height: "200px",
              }}
            >
              <SpinBadge />
            </div>
          </div>
          <div className="bento-grid">
            {/* PLACEHOLDER: replace PlaceholderImg with <img src="YOUR_URL" alt="..." /> */}
            <div
              className="bento-image-wrapper bento-h-300"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(1)}
            >
              <img src={project?.images?.[1]} alt="Screenshot 2" />
            </div>
            <div
              className="bento-image-wrapper bento-h-300"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(2)}
            >
              <img src={project?.images?.[2]} alt="Screenshot 3" />
            </div>
            <div
              className="bento-image-wrapper bento-h-400 bento-full-col"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(3)}
            >
              <img src={project?.images?.[3]} alt="Admin Dashboard" />
              {/* <div className="pill-btn pill-center">
                Admin Dashboard{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div> */}
            </div>
          </div>
        </motion.section>

        {/* Key Highlights Stats Row */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2px",
              background: "var(--border)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {[
              { stat: "9", label: "Security Layers" },
              { stat: "ACID", label: "MongoDB Transactions" },
              { stat: "10×", label: "Parallel Aggregations" },
              { stat: "0₹", label: "Checkout Gateway Cost" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                style={{
                  background: "var(--bg, #fff)",
                  padding: "40px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "48px",
                    fontWeight: "800",
                    letterSpacing: "-0.04em",
                    lineHeight: "1",
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--secondary)",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Lower Bento */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {/* PLACEHOLDER: replace PlaceholderImg with <img> once you have URLs */}
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(11)}
            >
              <img
                src={project?.images?.[11] || project?.images?.[0]}
                alt="WhatsApp Checkout"
              />
              {/* <div className="pill-btn pill-center">WhatsApp Checkout</div> */}
            </div>
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(12)}
            >
              <img
                src={project?.images?.[12] || project?.images?.[0]}
                alt="Analytics Charts"
              />
              {/* <div className="pill-btn pill-center">Analytics</div> */}
            </div>
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(13)}
            >
              <img
                src={project?.images?.[13] || project?.images?.[0]}
                alt="Product Management"
              />
              {/* <div className="pill-btn pill-center">Product Management</div> */}
            </div>
          </div>
        </motion.section>
      </div>
    ),
  },

  // =========================================================================
  // PROJECT 4 — ClothMart
  // =========================================================================
  {
    id: 4,
    slug: "clothmart",
    title: "ClothMart : Multi-Vendor Clothing E-Commerce Marketplace",
    summary:
      "B2B2C multi-tenant marketplace enabling local clothing stores to go digital with Razorpay payments, variant inventory management, coupon system & ImageKit CDN.",
    date: "Oct 2024 - Dec 2024",
    role: "Full-Stack Developer",
    tech: [
      "React 19",
      "Vite 8",
      "React Router v7",
      "TailwindCSS",
      "SCSS Modules",
      "Framer Motion",
      "Axios",
      "React Hot Toast",
      "Lucide React",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "bcryptjs",
      "Razorpay",
      "ImageKit CDN",
      "Multer",
      "Cookie Parser",
      "CORS",
      "Vercel",
      "Render",
    ],
    category: "E-Commerce",
    github: "https://github.com/ajinkya682/ClothMart",
    demo: "https://clothmart.vercel.app",
    // -----------------------------------------------------------------------
    // PLACEHOLDER: replace coverImage with your actual cover image URL
    // -----------------------------------------------------------------------
    coverImage: "",
    // -----------------------------------------------------------------------
    // PLACEHOLDER: replace each empty string with your actual image URLs
    // -----------------------------------------------------------------------
    images: [
      "", // 0 — cover / hero
      "", // 1
      "", // 2
      "", // 3
      "", // 4
      "", // 5
      "", // 6
      "", // 7
      "", // 8
      "", // 9
      "", // 10
      "", // 11 — Store dashboard
      "", // 12 — Product variants
      "", // 13 — Checkout / Razorpay
    ],
    featured: true,
    content: ({ openLightbox, project }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "96px" }}>
        {/* Hero */}
        <motion.section
          className="bento-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="project-title-editorial">
              Cloth
              <br />
              Mart
            </h1>
            <div style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--secondary)",
                    fontWeight: "600",
                  }}
                >
                  Date
                </p>
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  Oct 2024 - Dec 2024
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--secondary)",
                    fontWeight: "600",
                  }}
                >
                  Role
                </p>
                <p style={{ fontWeight: "600", fontSize: "15px" }}>
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "20px",
                color: "var(--secondary)",
                lineHeight: "1.8",
                maxWidth: "400px",
                marginBottom: "32px",
              }}
            >
              A complete B2B2C marketplace bringing offline clothing stores in
              India online — with multi-tenant store management,
              Razorpay-secured payments, product variant inventory, and coupon
              marketing tools.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="https://clothmart.vercel.app"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                <Globe size={18} /> Live Demo
              </a>
              <a
                href="https://github.com/ajinkya682/ClothMart"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "transparent",
                  border: "2px solid var(--border)",
                  color: "var(--text)",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                <Code size={18} /> Source Code
              </a>
            </div>
          </div>
          {/* PLACEHOLDER: replace PlaceholderImg with a real <img> tag once you have the URL */}
          <div
            className="bento-image-wrapper bento-h-600"
            style={{ cursor: "pointer" }}
            onClick={() => openLightbox(0)}
          >
            <img
              src={project?.coverImage || project?.images?.[0]}
              alt="Cover"
            />
            <div className="pill-btn">
              View all 14 images{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </motion.section>

        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-text">
            REACT 19 • NODE.JS • EXPRESS 5 • MONGODB • RAZORPAY • IMAGEKIT CDN •
            TAILWIND CSS • MULTI-TENANT • VARIANT INVENTORY • COUPON SYSTEM •
            REACT 19 • NODE.JS • EXPRESS 5 •
          </div>
        </div>

        {/* Sidebar + Grid */}
        <motion.section
          className="bento-grid-asym"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="sticky-sidebar"
            style={{ position: "sticky", top: "120px", alignSelf: "start" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                marginBottom: "24px",
              }}
            >
              The Problem & Approach
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--secondary)",
                lineHeight: "1.85",
                marginBottom: "24px",
              }}
            >
              Thousands of offline clothing stores in cities like Badlapur,
              Ulhasnagar, and Thane have no digital presence. They lose
              customers who search online before visiting a physical store — but
              lack the resources to build their own platform.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "var(--secondary)",
                lineHeight: "1.85",
              }}
            >
              ClothMart gives any store owner a digital storefront in minutes —
              with real product variant management (size + color + stock),
              Razorpay-secured checkout with cryptographic signature
              verification, and coupon tools to run promotions. No technical
              knowledge required.
            </p>
            <div
              style={{
                marginTop: "40px",
                position: "relative",
                height: "200px",
              }}
            >
              <SpinBadge />
            </div>
          </div>
          <div className="bento-grid">
            {/* PLACEHOLDER: replace PlaceholderImg with <img src="YOUR_URL" alt="..." /> */}
            <div
              className="bento-image-wrapper bento-h-300"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(1)}
            >
              <img src={project?.images?.[1]} alt="Screenshot 2" />
            </div>
            <div
              className="bento-image-wrapper bento-h-300"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(2)}
            >
              <img src={project?.images?.[2]} alt="Screenshot 3" />
            </div>
            <div
              className="bento-image-wrapper bento-h-400 bento-full-col"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(3)}
            >
              <img
                src={project?.images?.[3] || project?.images?.[0]}
                alt="Store Dashboard"
              />
              {/* <div className="pill-btn pill-center">
                Store Dashboard{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div> */}
            </div>
          </div>
        </motion.section>

        {/* Key Highlights Stats Row */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2px",
              background: "var(--border)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {[
              { stat: "B2B2C", label: "Multi-Tenant Architecture" },
              { stat: "2", label: "Roles: Owner & Customer" },
              { stat: "100%", label: "Razorpay Signature Verified" },
              { stat: "$0", label: "Storage Cost (CDN)" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                style={{
                  background: "var(--bg, #fff)",
                  padding: "40px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: "800",
                    letterSpacing: "-0.04em",
                    lineHeight: "1",
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--secondary)",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Lower Bento */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {/* PLACEHOLDER: replace PlaceholderImg with <img> once you have URLs */}
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(11)}
            >
              <img
                src={project?.images?.[11] || project?.images?.[0]}
                alt="Store Owner Dashboard"
              />
              {/* <div className="pill-btn pill-center">Store Dashboard</div> */}
            </div>
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(12)}
            >
              <img
                src={project?.images?.[12] || project?.images?.[0]}
                alt="Product Variants"
              />
              {/* <div className="pill-btn pill-center">Variant Inventory</div> */}
            </div>
            <div
              className="bento-image-wrapper bento-h-500"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(13)}
            >
              <img
                src={project?.images?.[13] || project?.images?.[0]}
                alt="Razorpay Checkout"
              />
              {/* <div className="pill-btn pill-center">Razorpay Checkout</div> */}
            </div>
          </div>
        </motion.section>
      </div>
    ),
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const categories = ["All", ...new Set(projects.map((p) => p.category))];
