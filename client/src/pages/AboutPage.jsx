import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";
import avatarImg from "../assets/ajinkya.jpeg";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import { ArrowRight, Code, Terminal, BrainCircuit, Rocket, GraduationCap, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh", background: "var(--bg)" }}>
      
      {/* 1. Hero Section */}
      <section style={{ padding: "80px 0 40px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "center" }}>
            
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 style={{ fontSize: "56px", fontWeight: "800", color: "var(--text)", letterSpacing: "-0.03em", marginBottom: "24px", lineHeight: "1.1" }}>
                Driven by Code.<br />
                <span style={{ color: "var(--primary)" }}>Powered by AI.</span>
              </h1>
              <p style={{ fontSize: "18px", color: "var(--secondary)", lineHeight: "1.7", marginBottom: "32px", maxWidth: "90%" }}>
                I'm a self-taught Full-Stack Developer specializing in the MERN stack. I build scalable SaaS products, AI-powered web applications, and real-time systems that solve actual problems.
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "var(--card)", padding: "8px 16px", borderRadius: "100px", border: "1px solid var(--border)" }}>
                  <span className="pulse-dot" style={{ width: 8, height: 8 }} />
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--text)" }}>Open to Opportunities</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "flex", justifyContent: "center" }}>
              <div style={{width: "min(350px, 80vw)",
                  height: "min(500px, 80vw)", aspectRatio: "1/1", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
                <img src={avatarImg} alt="Ajinkya Saivar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Journey */}
      <section style={{ padding: "80px 0", background: "var(--card)" }}>
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", marginBottom: "64px", textAlign: "center" }}>My Journey</h2>
            
            <div className="timeline-container">
              {/* Timeline Line */}
              <div className="timeline-line" />

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                
                {[
                  {
                    year: "2024",
                    title: "The Beginning",
                    description: "Discovered programming during my B.Sc coursework. Taught myself the MERN stack in under 12 months using online resources, documentation, and sheer curiosity."
                  },
                  {
                    year: "2024",
                    title: "First Freelance Success",
                    description: "At age 16, I delivered my first real-world freelance project. It taught me the importance of scalable architecture, client communication, and deploying production-ready code."
                  },
                  {
                    year: "2025",
                    title: "Hackathon Victory",
                    description: "Won the Creative Excellence Award at the Sheryians Cohort Hackathon. Built an AI-powered B2B Customer Support platform with real-time Socket.IO handoffs in 48 hours."
                  },
                  {
                    year: "Present",
                    title: "Building SaaS & AI Apps",
                    description: "Currently engineering complex systems like TalentIQ (an AI-powered ATS). Seeking a software engineering role where I can contribute to high-impact products."
                  }
                ].map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div key={i} variants={fadeUp} className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
                      <div className="timeline-content">
                        {/* Timeline Dot */}
                        <div className="timeline-dot" />
                        <span className="timeline-date">
                          {item.year}
                        </span>
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-desc">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        <style>{`
          .timeline-container {
            position: relative;
          }
          .timeline-line {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--border));
          }
          .timeline-item {
            display: flex;
            width: 100%;
            margin-bottom: 48px;
            position: relative;
          }
          .timeline-item.left {
            justify-content: flex-start;
          }
          .timeline-item.right {
            justify-content: flex-end;
          }
          .timeline-content {
            width: 50%;
            position: relative;
          }
          .timeline-item.left .timeline-content {
            padding-right: 48px;
            text-align: right;
          }
          .timeline-item.right .timeline-content {
            padding-left: 48px;
            text-align: left;
          }
          .timeline-dot {
            position: absolute;
            top: 6px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--card);
            border: 4px solid var(--primary);
            z-index: 2;
          }
          .timeline-item.left .timeline-dot {
            right: -8px;
          }
          .timeline-item.right .timeline-dot {
            left: -8px;
          }
          .timeline-date {
            display: inline-block;
            font-size: 13px;
            font-weight: 700;
            color: var(--primary);
            background: rgba(16,185,129,0.1);
            padding: 4px 12px;
            border-radius: 100px;
            margin-bottom: 16px;
          }
          .timeline-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--text);
            margin-bottom: 8px;
          }
          .timeline-desc {
            font-size: 15px;
            color: var(--secondary);
            line-height: 1.7;
            margin: 0;
          }

          @media (max-width: 768px) {
            .timeline-line {
              left: 16px;
              transform: none;
            }
            .timeline-item {
              display: block;
            }
            .timeline-content {
              width: 100%;
              padding: 0 0 0 48px !important;
              text-align: left !important;
            }
            .timeline-dot {
              left: 9px !important;
              right: auto !important;
            }
          }
        `}</style>
      </section>

      {/* 3. Core Philosophy */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", marginBottom: "48px", textAlign: "center" }}>Engineering Philosophy</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { icon: <Terminal size={24} />, title: "Scalable Architecture", desc: "I design systems that grow. From atomic MongoDB operations to multi-tenant schemas, I build backends meant for production." },
              { icon: <BrainCircuit size={24} />, title: "AI Integration", desc: "I don't just use APIs; I engineer prompts, structure JSON schemas, and weave AI (Gemini/Mistral) deeply into product workflows." },
              { icon: <Code size={24} />, title: "Clean Code", desc: "Code is read more than it is written. I prioritize maintainability, modular component design, and robust error handling." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: "32px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px" }}>
                <div style={{ width: "48px", height: "48px", background: "rgba(16,185,129,0.1)", color: "var(--primary)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--secondary)", lineHeight: "1.7" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep Dive Technical Expertise */}
      <section style={{ padding: "80px 0", background: "var(--card)" }}>
        <div className="container">
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", marginBottom: "48px", textAlign: "center" }}>Technical Arsenal</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            
            <div style={{ padding: "32px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Code size={18} style={{ color: "var(--primary)" }}/> Frontend
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["React.js", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "Redux Toolkit"].map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>

            <div style={{ padding: "32px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Terminal size={18} style={{ color: "var(--primary)" }}/> Backend
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.io", "WebRTC"].map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>

            <div style={{ padding: "32px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <BrainCircuit size={18} style={{ color: "var(--primary)" }}/> Databases & AI
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["MongoDB", "Mongoose", "OpenAI API", "Mistral AI", "Google Gemini"].map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>

            <div style={{ padding: "32px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Rocket size={18} style={{ color: "var(--primary)" }}/> Tools & Deployment
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Git", "GitHub", "Vercel", "Render", "Postman", "Puppeteer"].map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Education */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", marginBottom: "48px", textAlign: "center" }}>Education & Certifications</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ padding: "24px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", display: "flex", gap: "16px" }}>
              <GraduationCap size={24} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
              <div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)" }}>Bachelor of Science (B.Sc)</h4>
                <p style={{ fontSize: "14px", color: "var(--secondary)", margin: "4px 0 12px" }}>Dr. Babasaheb Ambedkar Marathwada University, Maharashtra</p>
                <span style={{ fontSize: "12px", fontWeight: "600", background: "var(--bg)", border: "1px solid var(--border)", padding: "4px 8px", borderRadius: "4px" }}>Expected 2028</span>
              </div>
            </div>

            <div style={{ padding: "24px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", display: "flex", gap: "16px" }}>
              <Award size={24} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
              <div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)" }}>Diploma in Web Development</h4>
                <p style={{ fontSize: "14px", color: "var(--secondary)", margin: "4px 0 12px" }}>STP Computer Education (Grade A)</p>
                <span style={{ fontSize: "12px", fontWeight: "600", background: "var(--bg)", border: "1px solid var(--border)", padding: "4px 8px", borderRadius: "4px" }}>2024 – 2025</span>
              </div>
            </div>

            <div style={{ padding: "24px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", display: "flex", gap: "16px" }}>
              <Award size={24} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }} />
              <div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text)" }}>Full-Stack Web Development Certification</h4>
                <p style={{ fontSize: "14px", color: "var(--secondary)", margin: "4px 0 0" }}>Sheryians Coding School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div style={{ padding: "64px", background: "linear-gradient(135deg, var(--card), var(--bg))", border: "1px solid var(--border)", borderRadius: "24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--primary), transparent)" }} />
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text)", marginBottom: "16px" }}>Ready to see my work?</h2>
            <p style={{ fontSize: "16px", color: "var(--secondary)", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>Explore the AI-powered SaaS platforms and web applications I've built from the ground up.</p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/projects" variant="primary" size="lg" icon={<ArrowRight size={18} />}>View Projects</Button>
              <Button href="/contact" variant="secondary" size="lg">Get In Touch</Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
