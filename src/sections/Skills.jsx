import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend Development",
    items: [
      "JavaScript (ES6+)",
      "React.js",
      "React Hooks",
      "React Router",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Fetch API",
      "Async / Await",
    ],
  },
  {
    title: "Database & Tools",
    items: [
      "MongoDB",
      "JSON",
      "Git",
      "GitHub",
      "VS Code",
      "Render",
    ],
  },
  {
    title: "Programming & AI/ML",
    items: [
      "Python",
      "C++",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title">
          Skills & Technologies
        </h2>

        <p className="skills-description">
          Technologies and tools I've explored through hands-on projects,
          continuous learning and practical experience.
        </p>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{group.title}</h3>

              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;