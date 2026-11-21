
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles/global.css";

function SocialLinks() {
  return (
    <div className="social-sidebar">
      <a
        href="https://github.com/MANOS-19"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/mano-sk"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <div className="social-line"></div>
    </div>
  );
}

function EmailSidebar() {
  return (
    <a
      href="mailto:manosk.techie@gmail.com"
      className="email-sidebar"
      aria-label="Send email to Mano"
    >
      manosk.techie@gmail.com
    </a>
  );
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <div className="animated-background">
        <div className="background-orb orb-one"></div>
        <div className="background-orb orb-two"></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <SocialLinks />
      <EmailSidebar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
