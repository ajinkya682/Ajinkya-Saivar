import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Lightbulb, Info, TrendingUp, CheckCircle2 } from 'lucide-react';

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
      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        {/* Section 1: Problem */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "rgba(239, 68, 68, 0.1)", color: "#ef4444", padding: "12px", borderRadius: "14px" }}>
              <AlertCircle size={28} />
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>The Problem</h2>
          </div>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "32px", fontSize: "17px", color: "var(--secondary)", lineHeight: "1.8", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
            <p>Modern hiring teams are overwhelmed by the volume and complexity of recruitment. Traditional Applicant Tracking Systems are passive — they store resumes but offer no intelligence. Recruiters manually read through hundreds of applications, subjectively score candidates, coordinate video interviews across third-party tools like Zoom or Google Meet, and still miss strong candidates buried in the pipeline.</p>
            <p style={{ marginTop: "16px" }}>There was no single platform that could intelligently score resumes, conduct interviews natively, route candidates through a visual pipeline, and surface hidden talent across open roles — all within a secure, multi-tenant environment where each company's data stays completely isolated.</p>
          </div>
        </motion.section>

        {/* Section 2: Approach */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", padding: "12px", borderRadius: "14px" }}>
              <Lightbulb size={28} />
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>The Approach</h2>
          </div>
          <div style={{ padding: "0 12px", fontSize: "17px", color: "var(--text)", lineHeight: "1.8", fontWeight: "500" }}>
            <p>The architecture was designed from the ground up as a production-grade, AI-native SaaS.</p>
            <ul style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", listStyle: "none", padding: 0 }}>
              <li style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px" }}>
                <CheckCircle2 size={24} color="#10b981" style={{ marginBottom: "12px" }} />
                <strong>Multi-Tenant Foundation:</strong> Built using Next.js 14 API Routes with dual JWT authentication — 60-minute access tokens paired with 7-day refresh tokens stored in httpOnly cookies.
              </li>
              <li style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px" }}>
                <CheckCircle2 size={24} color="#10b981" style={{ marginBottom: "12px" }} />
                <strong>AI Integration:</strong> Google Gemini 2.5 Flash integrated with strict responseSchema and responseMimeType enforcement to score resumes across 4 structured dimensions.
              </li>
              <li style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px" }}>
                <CheckCircle2 size={24} color="#10b981" style={{ marginBottom: "12px" }} />
                <strong>Native Video:</strong> WebRTC peer-to-peer connections established using MongoDB as the signaling store with TTL indexes for automatic 24-hour cleanup.
              </li>
              <li style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px" }}>
                <CheckCircle2 size={24} color="#10b981" style={{ marginBottom: "12px" }} />
                <strong>Performant UI:</strong> Drag-and-drop Kanban board using dnd-kit with @tanstack/react-virtual for virtualized column rendering, keeping the UI smooth even with 500+ candidates.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 3: Description */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "rgba(139, 92, 246, 0.1)", color: "#8b5cf6", padding: "12px", borderRadius: "14px" }}>
              <Info size={28} />
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>Project Description</h2>
          </div>
          <div style={{ padding: "0 12px", fontSize: "17px", color: "var(--secondary)", lineHeight: "1.8" }}>
            <p>TalentIQ is a fully featured, multi-tenant AI-powered Applicant Tracking System built on Next.js 14. Companies can post jobs, receive applications, and let Gemini 2.5 Flash automatically score every candidate resume from 0 to 100 across skills, experience, education, and keyword match — complete with structured strengths and gap analysis.</p>
            <p style={{ marginTop: "16px" }}>Recruiters manage candidates through a drag-and-drop Kanban pipeline with stage-change persistence and optimistic UI updates. When it's time to interview, the platform hosts native WebRTC video interviews with mic/camera toggle and screen sharing — no third-party meeting link required.</p>
            <p style={{ marginTop: "16px" }}>A cross-job AI matching engine identifies candidates with 75%+ skill overlap across all open roles at the same company, surfacing hidden talent that would otherwise be missed. Offer management is built in, with PDF export via html2pdf.js, a candidate portal with token-based authentication, and digital hire letter signing. A weekly AI-generated analytics summary — powered by Gemini and served from cache — gives hiring managers a bird's-eye view of pipeline health, sourcing performance, and team velocity. The entire system spans 17 Mongoose schemas with compound indexes, TTL indexes, and Google OAuth2 alongside credential-based login with bcrypt-hashed passwords.</p>
          </div>
        </motion.section>

        {/* Section 4: Impact */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "12px", borderRadius: "14px" }}>
              <TrendingUp size={28} />
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>Impact & Results</h2>
          </div>
          <div style={{ background: "linear-gradient(135deg, var(--card), rgba(16, 185, 129, 0.05))", border: "1px solid var(--border)", borderRadius: "20px", padding: "40px", fontSize: "18px", color: "var(--text)", lineHeight: "1.8", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
            <p>TalentIQ demonstrates what a senior-level, production-ready SaaS looks like when AI is treated as a first-class architectural concern rather than a bolted-on feature. The structured Gemini integration eliminates hours of manual resume screening per role.</p>
            <div style={{ display: "flex", gap: "16px", marginTop: "24px", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981", padding: "8px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "15px" }}>20+ Feature Modules</span>
              <span style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981", padding: "8px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "15px" }}>17 Database Schemas</span>
              <span style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981", padding: "8px 16px", borderRadius: "30px", fontWeight: "600", fontSize: "15px" }}>100% Native WebRTC</span>
            </div>
            <p style={{ marginTop: "24px" }}>The WebRTC interview system removes the dependency on external meeting tools, keeping the entire hiring workflow inside one platform. The cross-job AI matcher directly addresses a real sourcing problem — good candidates getting lost because they applied to the wrong role. With systems spanning real-time video, background job processing, drag-and-drop UI, PDF generation, and multi-tenant auth — TalentIQ represents a complete, shippable product that could be taken to market as-is.</p>
          </div>
        </motion.section>
      </div>
    )
  },
  {
    id: 2,
    slug: "supportbotai",
    title: "SupportBotAI : AI-Powered B2B Customer Support Platform",
    summary: "Multi-tenant SaaS chatbot with real-time human handoff, workload-aware routing, and browser push notifications. Won Creative Excellence  Sheryians Cohort Hackathon (48 hrs, team of 4).",
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
      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        {/* Section 1: Problem */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "rgba(239, 68, 68, 0.1)", color: "#ef4444", padding: "12px", borderRadius: "14px" }}>
              <AlertCircle size={28} />
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>The Problem</h2>
          </div>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "32px", fontSize: "17px", color: "var(--secondary)", lineHeight: "1.8", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
            <p>Small and mid-sized businesses struggle to provide responsive customer support without hiring large support teams. Generic chatbots either answer everything with low-quality, canned responses or escalate everything to humans — defeating the purpose of automation.</p>
            <p style={{ marginTop: "16px" }}>The real challenge is knowing when to escalate: a customer who is frustrated, confused, or asking something outside the AI's confidence range needs a human immediately, not another bot reply. Beyond escalation, routing that human conversation to the right available agent — without race conditions when multiple agents are online — is a hard concurrency problem. Additionally, businesses needed a way to embed this entire system on their existing website with zero friction, and agents needed to be notified of new tickets even when they weren't actively looking at the dashboard.</p>
          </div>
        </motion.section>

        {/* Section 2: Approach */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", padding: "12px", borderRadius: "14px" }}>
              <Lightbulb size={28} />
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>The Approach</h2>
          </div>
          <div style={{ padding: "0 12px", fontSize: "17px", color: "var(--text)", lineHeight: "1.8", fontWeight: "500" }}>
            <p>We engineered a dual-layer AI and real-time infrastructure, constructed under intense pressure during a 48-hour hackathon.</p>
            <ul style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", listStyle: "none", padding: 0 }}>
              <li style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px" }}>
                <CheckCircle2 size={24} color="#3b82f6" style={{ marginBottom: "12px" }} />
                <strong>Dynamic Prompt Injection:</strong> The AI layer was built around MistralAI. System prompts dynamically inject the business's crawled knowledge base, the detected emotional tone, and inferred user intent.
              </li>
              <li style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px" }}>
                <CheckCircle2 size={24} color="#3b82f6" style={{ marginBottom: "12px" }} />
                <strong>Confidence Tagging:</strong> A custom protocol ([CONFIDENCE: High/Low]) was embedded directly into the model's response format, allowing automatic escalation without a separate classifier model.
              </li>
              <li style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px" }}>
                <CheckCircle2 size={24} color="#3b82f6" style={{ marginBottom: "12px" }} />
                <strong>Atomic Routing:</strong> Ticket routing was solved at the database level using atomic findOneAndUpdate with routing status state guards, preventing agent claim race conditions.
              </li>
              <li style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px" }}>
                <CheckCircle2 size={24} color="#3b82f6" style={{ marginBottom: "12px" }} />
                <strong>Frictionless Integration:</strong> The embeddable widget was engineered as a vanilla JS script tag that injects an iframe using server-side URL injection, communicating via PostMessage.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 3: Description */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "rgba(139, 92, 246, 0.1)", color: "#8b5cf6", padding: "12px", borderRadius: "14px" }}>
              <Info size={28} />
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>Project Description</h2>
          </div>
          <div style={{ padding: "0 12px", fontSize: "17px", color: "var(--secondary)", lineHeight: "1.8" }}>
            <p>SupportBotAI is a B2B multi-tenant SaaS platform that gives any business a production-ready AI customer support system. When a business signs up, they provide their website URL and the platform's Puppeteer-based crawler traverses up to 8 pages using BFS traversal, renders JavaScript-heavy pages with headless Chrome, and deduplicates content at 85% word-overlap — automatically building an AI knowledge base without any manual input.</p>
            <p style={{ marginTop: "16px" }}>The AI chat engine, powered by MistralAI, uses this knowledge base as its context and responds to customers with business-specific, emotionally-aware answers. When the AI's confidence drops or a customer's frustration is detected, the ticket is instantly escalated and routed to the least-busy available human agent — with full conversation history handed off seamlessly.</p>
            <p style={{ marginTop: "16px" }}>Agents manage their queue from a real-time dashboard, receiving browser push notifications for new tickets even when the tab is closed. Business owners get a separate analytics view with conversation metrics, resolution rates, and agent performance data visualized via Recharts. The entire platform — chat widget, agent console, business dashboard, and AI engine — was built and deployed in 48 hours as part of a hackathon, running in production on Vercel (frontend) and Render (backend) with MongoDB Atlas.</p>
          </div>
        </motion.section>

        {/* Section 4: Impact */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "12px", borderRadius: "14px" }}>
              <TrendingUp size={28} />
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>Impact & Results</h2>
          </div>
          <div style={{ background: "linear-gradient(135deg, var(--card), rgba(16, 185, 129, 0.05))", border: "1px solid var(--border)", borderRadius: "20px", padding: "40px", fontSize: "18px", color: "var(--text)", lineHeight: "1.8", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ fontSize: "40px" }}>🏆</span>
              <strong style={{ fontSize: "24px" }}>Creative Excellence Award</strong>
            </div>
            <p>SupportBotAI won Creative Excellence at the Sheryians Cohort Hackathon, recognized for the depth of engineering delivered in 48 hours across a team of 4.</p>
            <p style={{ marginTop: "16px" }}>The platform directly solves the false dichotomy between full automation and full human support — the confidence-based escalation system means customers get AI speed for routine questions and human empathy for complex ones. The atomic ticket routing engine eliminates a real concurrency bug that plagues most naive implementations.</p>
            <p style={{ marginTop: "16px" }}>The single script-tag embed lowers the integration barrier to near zero for non-technical business owners. Technically, the project demonstrates production-level competency across real-time systems, AI prompt engineering, serverless web scraping, browser push APIs, cross-origin widget architecture, and multi-tenant backend design — all shipped under extreme time pressure.</p>
          </div>
        </motion.section>
      </div>
    )
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
export const categories = ["All", ...new Set(projects.map((p) => p.category))];
