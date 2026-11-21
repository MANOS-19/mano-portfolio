import { motion } from "framer-motion";
import {
  AppWindow,
  CalendarCheck,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const buildAreas = [
  {
    icon: AppWindow,
    number: "01",
    title: "Web Applications",
    description:
      "Creating interactive and responsive web applications with practical features and user-friendly experiences.",
    tags: ["React.js", "JavaScript", "Responsive UI"],
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Productivity Tools",
    description:
      "Building applications that help people organize tasks, manage schedules and improve everyday productivity.",
    tags: ["Task Management", "Planning", "Tracking"],
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "AI-Powered Applications",
    description:
      "Developing intelligent applications that use machine learning and AI to solve real-world problems.",
    tags: ["Python", "Machine Learning", "NLP"],
  },
];

function WhatIBuild() {
  return (
    <section className="about-section" id="what-i-build">
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">03 — WHAT I BUILD</span>

        <h2>
          Turning ideas into
          <br />
          <span>digital reality.</span>
        </h2>
      </motion.div>

      <div className="about-highlights">
        {buildAreas.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              className="about-highlight"
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="about-highlight-icon">
                <Icon size={25} />
              </div>

              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="about-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <a href="#projects" className="about-link">
        EXPLORE MY PROJECTS <ArrowUpRight size={17} />
      </a>
    </section>
  );
}

export default WhatIBuild;