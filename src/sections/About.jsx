
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section" id="about">

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title">
          About Me
        </h2>

        <p>
          Hello! I'm Mano, a B.Tech graduate in Artificial
          Intelligence and Machine Learning from Saveetha
          School of Engineering.
        </p>

        <p>
          I'm passionate about building web applications
          and turning ideas into practical digital solutions.
          I enjoy working with modern technologies and
          understanding how different parts of an application
          work together.
        </p>

        <p>
          I've gained hands-on experience by developing
          projects using React.js, JavaScript, Node.js,
          Express.js and MongoDB. My projects have helped
          me explore frontend development, backend
          integration, REST APIs and application deployment.
        </p>

        <p>
          I'm currently looking for my first professional
          opportunity as a developer, where I can contribute,
          learn from experienced teams and grow my skills.
        </p>

        <div className="about-tech">
          <p>Technologies I've been working with:</p>

          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Python</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-image-frame">
          <img
            src="/images/mano-profile.jpeg"
            alt="Mano S"
          />
        </div>
      </motion.div>

    </section>
  );
}

export default About;
