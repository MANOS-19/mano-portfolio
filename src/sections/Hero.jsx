import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div className="hero-content" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="section-label">Hi, my name is</p>
        <h1>Mano S.<br /><span>I build web applications.</span></h1>
        <p className="hero-description">
         Every application has a story behind it. Mine is driven by curiosity, shaped by experimentation, and inspired by the satisfaction of turning an idea into something that actually works.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">Explore My Work <ArrowUpRight size={17} /></a>
          <a href="#contact" className="secondary-btn">Get In Touch</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;