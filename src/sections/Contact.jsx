import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">GET IN TOUCH</span>

        <h2>
          Have a project
          <br />
          in <span>mind?</span>
        </h2>

        <p>
          I'm open to opportunities where I can contribute,
          learn and grow as a developer. Let's connect.
        </p>

        <a
          className="contact-email"
          href="mailto:manosk.techie@gmail.com"
        >
          manosk.techie@gmail.com
          <ArrowUpRight size={17} />
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/MANOS-19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a href="mailto:manosk.techie@gmail.com">
            <Mail size={18} />
            Email
          </a>
        </div>
      </motion.div>

      <footer className="site-footer">
        <p>
          MANO S © {new Date().getFullYear()} · DESIGNED & BUILT WITH CARE.
        </p>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </section>
  );
}

export default Contact;