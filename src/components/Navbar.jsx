import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

function Navbar({ theme, toggleTheme }) {
  return (
    <motion.nav className="navbar" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
     <a
  href="/"
  className="brand-logo"
  aria-label="Mano - Home"
  onClick={(e) => {
    e.preventDefault();
    window.location.replace("/");
  }}
>
  <svg viewBox="0 0 50 55" aria-hidden="true">
    <path d="M25 2 L47 15 V40 L25 53 L3 40 V15 Z" />
    <text x="25" y="34" textAnchor="middle">M</text>
  </svg>
</a>

      <div className="nav-right">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;