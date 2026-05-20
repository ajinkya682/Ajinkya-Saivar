import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CommandMenu from "./components/layout/CommandMenu";
import ScrollProgress from "./components/ui/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import PageTransition from "./components/common/PageTransition";

// Home sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import GitHubSection from "./components/sections/GitHub";
import Resume from "./components/sections/Resume";
import Testimonials from "./components/sections/Testimonials";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";

// Pages
import ProjectsPage from "./pages/ProjectsPage";
import ProjectSlugPage from "./pages/ProjectSlugPage";
import BlogPage from "./pages/BlogPage";
import BlogSlugPage from "./pages/BlogSlugPage";

import "./index.css";
import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <GitHubSection />
      <div className="section-divider" />
      <Resume />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Blog />
      <div className="section-divider" />
      <Contact />
    </>
  );
}

function AppInner() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [loaded, setLoaded] = useState(() => sessionStorage.getItem("portfolio_loaded") === "true");
  const location = useLocation();

  const handleLoadComplete = () => {
    sessionStorage.setItem("portfolio_loaded", "true");
    setLoaded(true);
  };

  if (!loaded) {
    return <LoadingScreen onComplete={handleLoadComplete} />;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar onCommandOpen={() => setCommandOpen(true)} />
      <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />

      <main>
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectSlugPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogSlugPage />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </BrowserRouter>
  );
}
