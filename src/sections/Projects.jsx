import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    name: "Questify",
    type: "FULL-STACK TASK MANAGEMENT APPLICATION",
    description:
      "A productivity platform that helps users organize tasks, manage schedules, track progress and build productive habits through daily challenges, XP and achievements.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/questify-dashboard.jpg",
    imageAlt: "Questify dashboard",
    demo: "https://questify-frontend-rzdc.onrender.com",
  },
  {
    name: "WeatherNow",
    type: "FULL-STACK WEATHER FORECAST APPLICATION",
    description:
      "A weather application that provides current conditions, temperature, humidity, wind speed and a five-day forecast for cities around the world.",
    stack: ["React.js", "Node.js", "Express.js", "WeatherAPI"],
    image: "/projects/weathernow-homepage.jpg",
    imageAlt: "WeatherNow homepage",
    demo: "https://weather-now-hz5h.onrender.com",
    repo: "https://github.com/MANOS-19/weather-now",
  },
  {
    name: "Hinglish Sentiment Analyzer",
    type: "NLP WEB APPLICATION",
    description:
      "An application that analyzes Hindi-English mixed text and predicts whether the expressed sentiment is positive, negative or neutral using a multilingual AI model.",
    stack: ["Python", "Hugging Face", "Streamlit", "NLP"],
    image: "/projects/hinglish-home.jpg",
    imageAlt: "Hinglish Sentiment Analyzer homepage",
    demo: "https://bolsense-frontend.onrender.com",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading-row">
        <div>
          <span className="section-label">SELECTED WORK</span>
          <h2>
            Things I've <span>built.</span>
          </h2>
        </div>

        <p>
          A selection of applications I've developed through learning,
          experimentation and practical experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="project-preview-wrap">
              <a
                className="project-image-link"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} live application`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />

                <span className="project-image-overlay">
                  <ExternalLink size={20} />
                </span>
              </a>
            </div>

            <div className="project-main">
              <span className="project-type">{project.type}</span>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <ExternalLink size={15} />
                </a>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code <Code2 size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;