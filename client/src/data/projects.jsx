import React from 'react';
import { motion } from 'framer-motion';

const SpinBadge = () => (
  <div className="spin-badge">
    <svg viewBox="0 0 100 100" width="100" height="100">
      <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
      <text width="500">
        <textPath href="#curve" fill="var(--text)" fontSize="10.5" fontWeight="700" letterSpacing="1.5">
          MODERN WEB ARCHITECTURE • AI POWERED • 
        </textPath>
      </text>
    </svg>
    <div className="spin-badge-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  </div>
);

export const projects = [
  {
    id: 1,
    slug: "talentiq",
    title: "TalentIQ : AI-Powered Talent Intelligence Platform",
    summary: "Production-grade SaaS ATS with AI candidate scoring, WebRTC interviews & intelligent hiring analytics.",
    tech: [
      "Next.js 14", "TypeScript", "React 18", "TailwindCSS", "Zustand",
      "TanStack Query", "MongoDB", "Mongoose", "Google Gemini AI", "WebRTC",
      "Socket.io", "Inngest", "JWT Authentication", "Google OAuth2",
      "dnd-kit", "Framer Motion", "Recharts", "Zod", "UploadThing", "ImageKit"
    ],
    category: "AI",
    github: "https://github.com/ajinkya682/Flagship-Portfolio-Projects/tree/main/AI-Powered-Talent-Intelligence-Platform",
    demo: "https://talentiq-demos-projects-8f1fc7b1.vercel.app",
    coverImage: "https://media.licdn.com/dms/image/v2/D4D22AQFWC2rcOMWd4w/feedshare-image-high-res/B4DZ7HU4aZIYAU-/0/1781460602030?e=1784160000&v=beta&t=SPFrKNHzjl_5-oPKqwaxKUMcVi_0UE75_LrmXutRS4E",
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
      "https://media.licdn.com/dms/image/v2/D4D22AQE7okn7xSdcNQ/feedshare-image-high-res/B4DZ7HU4PKJcAU-/0/1781460600180?e=1784160000&v=beta&t=MZY6LOxkuZOdVRdYFpR3OVPJgVpiYvFCHlLtFoMkjbw"
    ],
    featured: true,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "96px" }}>
        
        {/* Section 1: Hero Editorial Layout */}
        <motion.section className="bento-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div>
            <h1 className="project-title-editorial">TalentIQ<br/>Platform</h1>
            <p style={{ fontSize: "20px", color: "var(--secondary)", lineHeight: "1.8", maxWidth: "400px", marginBottom: "32px" }}>
              Welcome to the TalentIQ project page, showcasing a production-grade SaaS ATS with AI candidate scoring, WebRTC interviews & intelligent hiring analytics.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="https://talentiq-demos-projects-8f1fc7b1.vercel.app" target="_blank" rel="noreferrer" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: "999px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Live Demo</a>
            </div>
          </div>
          <div className="bento-image-wrapper" style={{ height: "600px" }}>
            <img src="https://media.licdn.com/dms/image/v2/D4D22AQFWC2rcOMWd4w/feedshare-image-high-res/B4DZ7HU4aZIYAU-/0/1781460602030?e=1784160000&v=beta&t=SPFrKNHzjl_5-oPKqwaxKUMcVi_0UE75_LrmXutRS4E" alt="TalentIQ Cover" />
            <div className="pill-btn">Discover More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
          </div>
        </motion.section>

        {/* Section 2: Marquee */}
        <div className="marquee-container">
          <div className="marquee-text">
            NEXT.JS 14 • TYPESCRIPT • GEMINI AI • WEBRTC • MONGODB • TAILWIND CSS • ZUSTAND • NEXT.JS 14 • TYPESCRIPT • GEMINI AI • WEBRTC • MONGODB • TAILWIND CSS • ZUSTAND • 
          </div>
        </div>

        {/* Section 3: Sidebar + Grid */}
        <motion.section className="bento-grid-asym" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="sticky-sidebar" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <h2 style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em", lineHeight: "1.1", marginBottom: "24px" }}>The Problem & Approach</h2>
            <p style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: "1.85", marginBottom: "24px" }}>
              Modern hiring teams are overwhelmed by the volume and complexity of recruitment. Traditional Applicant Tracking Systems are passive — they store resumes but offer no intelligence.
            </p>
            <p style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: "1.85" }}>
              The architecture was designed from the ground up as a production-grade, AI-native SaaS. We utilized Gemini 2.5 Flash for scoring resumes and WebRTC for native video interviews, routing candidates through a beautiful Kanban pipeline.
            </p>
            <div style={{ marginTop: "40px", position: "relative", height: "200px" }}>
              <SpinBadge />
            </div>
          </div>
          
          <div className="bento-grid">
            <div className="bento-image-wrapper" style={{ height: "300px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQG_1fznM7027g/feedshare-image-high-res/B4DZ7gJ9DEI0AY-/0/1781877166897?e=1784160000&v=beta&t=GQc25QNsQczMRgPNmU4jIQGsSFeDvIFUAe7QnM_EADA" alt="App view" />
            </div>
            <div className="bento-image-wrapper" style={{ height: "300px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQHNMpjBR00X4w/feedshare-image-high-res/B4DZ7HU4R.H0Ac-/0/1781460601072?e=1784160000&v=beta&t=xHXnEhyR2b0wWCDMnofGtITzB2nQoCcUTtOVtZS1Plc" alt="App view" />
            </div>
            <div className="bento-image-wrapper" style={{ gridColumn: "1 / -1", height: "400px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQGhp1MhTn4VZg/feedshare-image-high-res/B4DZ7HU4PVGYAY-/0/1781460601031?e=1784160000&v=beta&t=RXKcZNzmbTSfhaeWol2yyM-itOqcnkfcN7h9CBnMWPc" alt="App view large" />
              <div className="pill-btn pill-center">Kanban Board <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Lower Bento Layout */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            <div className="bento-image-wrapper" style={{ height: "500px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQFKZg0RsndDVg/feedshare-image-high-res/B4DZ7HU4JnHEAU-/0/1781460600512?e=1784160000&v=beta&t=jsIljB2QFgiBj-U_Mcy_SNFH27nOODk8KKpyPjZgplc" alt="Detail 1" />
              <div className="pill-btn pill-center">WebRTC Interviews</div>
            </div>
            <div className="bento-image-wrapper" style={{ height: "500px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQEzeLHGrcpWBg/feedshare-image-high-res/B4DZ7HU4VRIEAU-/0/1781460601571?e=1784160000&v=beta&t=hybxopbLA8Htxv9yivFFMAexOczbPlUwgIuhdFV8zSw" alt="Detail 2" />
              <div className="pill-btn pill-center">Analytics</div>
            </div>
            <div className="bento-image-wrapper" style={{ height: "500px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQHkN86Pl6-kWA/feedshare-image-high-res/B4DZ7HU4MBHQAU-/0/1781460600697?e=1784160000&v=beta&t=FZT1X2KZRf_crC_nsU7LH-2Kmo4vhIX1D6J-vDmIX0Q" alt="Detail 3" />
              <div className="pill-btn pill-center">Job Portal</div>
            </div>
          </div>
        </motion.section>
      </div>
    )
  },
  {
    id: 2,
    slug: "supportbotai",
    title: "SupportBotAI : AI-Powered B2B Customer Support Platform",
    summary: "Multi-tenant SaaS chatbot with real-time human handoff, workload-aware routing, and browser push notifications.",
    tech: [
      "React 19", "Redux Toolkit", "Vite", "Node.js", "Express 5",
      "Socket.IO", "MongoDB", "Mongoose", "MistralAI", "Web Push API",
      "Puppeteer", "Cheerio", "Agenda", "Google OAuth2", "Resend",
      "ImageKit", "JWT Authentication", "Framer Motion", "Recharts"
    ],
    category: "AI",
    github: "https://github.com/ajinkya682/SupportBotAI",
    demo: "https://supportbotai.vercel.app",
    coverImage: "https://media.licdn.com/dms/image/v2/D4D22AQFdb5BzS5RRMg/feedshare-image-high-res/B4DZ4qDMm2JUAU-/0/1778821942663?e=1784160000&v=beta&t=vXiyvd1tyjKoR8_KcIQhRTcTB--UySyW63exV0iXXoI",
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
      "https://media.licdn.com/dms/image/v2/D4D22AQGU02t0m8PLyQ/feedshare-image-high-res/B4DZ4qEbygJQAU-/0/1778822267015?e=1784160000&v=beta&t=o6u3z1Dqroa2l-Qw5zoqlO9If_3j2Gq16hVhyB-4eL8"
    ],
    featured: true,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "96px" }}>
        
        {/* Section 1: Hero Editorial Layout */}
        <motion.section className="bento-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div>
            <h1 className="project-title-editorial">SupportBot<br/>AI</h1>
            <p style={{ fontSize: "20px", color: "var(--secondary)", lineHeight: "1.8", maxWidth: "400px", marginBottom: "32px" }}>
              Welcome to the SupportBotAI project page, showcasing a multi-tenant SaaS chatbot with real-time human handoff and MistralAI engine.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="https://supportbotai.vercel.app" target="_blank" rel="noreferrer" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: "999px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Live Demo</a>
            </div>
          </div>
          <div className="bento-image-wrapper" style={{ height: "600px" }}>
            <img src="https://media.licdn.com/dms/image/v2/D4D22AQFdb5BzS5RRMg/feedshare-image-high-res/B4DZ4qDMm2JUAU-/0/1778821942663?e=1784160000&v=beta&t=vXiyvd1tyjKoR8_KcIQhRTcTB--UySyW63exV0iXXoI" alt="Cover" />
            <div className="pill-btn">Discover More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
          </div>
        </motion.section>

        {/* Section 2: Marquee */}
        <div className="marquee-container">
          <div className="marquee-text">
            REACT 19 • REDUX TOOLKIT • EXPRESS 5 • MISTRAL AI • MONGODB • SOCKET.IO • REACT 19 • REDUX TOOLKIT • EXPRESS 5 • MISTRAL AI • MONGODB • SOCKET.IO • 
          </div>
        </div>

        {/* Section 3: Sidebar + Grid */}
        <motion.section className="bento-grid-asym" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="sticky-sidebar" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <h2 style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em", lineHeight: "1.1", marginBottom: "24px" }}>The Problem & Approach</h2>
            <p style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: "1.85", marginBottom: "24px" }}>
              Small and mid-sized businesses struggle to provide responsive customer support without hiring large support teams. Generic chatbots either answer everything with low-quality, canned responses or escalate everything to humans.
            </p>
            <p style={{ fontSize: "17px", color: "var(--secondary)", lineHeight: "1.85" }}>
              We engineered a dual-layer AI and real-time infrastructure, constructed under intense pressure during a 48-hour hackathon, directly solving the confidence-based escalation routing system.
            </p>
            <div style={{ marginTop: "40px", position: "relative", height: "200px" }}>
              <SpinBadge />
            </div>
          </div>
          
          <div className="bento-grid">
            <div className="bento-image-wrapper" style={{ height: "300px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQEOFND9esy0zg/feedshare-image-high-res/B4DZ4qEYncKcAU-/0/1778822254008?e=1784160000&v=beta&t=lmizeiPDRWKBJXg-SN3FNs33vVfI6lAqLvXWjlm1jvI" alt="App view" />
            </div>
            <div className="bento-image-wrapper" style={{ height: "300px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQFdwP8oCj_6fA/feedshare-image-high-res/B4DZ4qEaMlIMAU-/0/1778822260496?e=1784160000&v=beta&t=gjBVQSCPkM5-Gr-f7j7Twx2fjzTEoTgrSUYf51-8oyc" alt="App view" />
            </div>
            <div className="bento-image-wrapper" style={{ gridColumn: "1 / -1", height: "400px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQFKVMoigyHixw/feedshare-image-high-res/B4DZ4qEZc9KcAU-/0/1778822257485?e=1784160000&v=beta&t=O5IdUdKm4ioKgTX_3Ykszsd1qtYrhhH1boNlepdNTqY" alt="App view large" />
              <div className="pill-btn pill-center">AI Dashboard <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Lower Bento Layout */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            <div className="bento-image-wrapper" style={{ height: "500px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQFAtMJ0JI8ATw/feedshare-image-high-res/B4DZ4qEUdKI0AY-/0/1778822236920?e=1784160000&v=beta&t=jS95m692Mp1iE3psJFhyiDo_Y7V8dGo7w86kIRCeka0" alt="Detail 1" />
              <div className="pill-btn pill-center">Integration</div>
            </div>
            <div className="bento-image-wrapper" style={{ height: "500px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQHl5vG9VtStOw/feedshare-image-high-res/B4DZ4qEa0MHMAU-/0/1778822262997?e=1784160000&v=beta&t=DwxEAYH4uLbtPDiG09VAGOjZvMnxDkl384qFebanD_Q" alt="Detail 2" />
              <div className="pill-btn pill-center">Chat Flow</div>
            </div>
            <div className="bento-image-wrapper" style={{ height: "500px" }}>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQH12RpooXCLdA/feedshare-image-high-res/B4DZ4qEbqZJUAU-/0/1778822266001?e=1784160000&v=beta&t=6G6h5FeQjEgrxi33cgVnbeEm56cS_m3jf50OBXpPlNo" alt="Detail 3" />
              <div className="pill-btn pill-center">Routing</div>
            </div>
          </div>
        </motion.section>
      </div>
    )
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
export const categories = ["All", ...new Set(projects.map((p) => p.category))];
