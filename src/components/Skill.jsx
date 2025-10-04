// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: "devicon-html5-plain colored", level: "95%" },
    { name: "CSS3", icon: "devicon-css3-plain colored", level: "90%" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", level: "92%" },
    { name: "React", icon: "devicon-react-original colored", level: "88%" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored", level: "85%" },
    { name: "Firebase", icon: "devicon-firebase-plain colored", level: "80%" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored", level: "90%" },
    { name: "Git & GitHub", icon: "devicon-github-original colored", level: "87%" },
    { name: "Figma", icon: "devicon-figma-plain colored", level: "78%" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40, rotateY: 12, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <section id="skill" className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My <span>Skills & Tools</span>
      </motion.h2>

      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I use these technologies to build fast, interactive, and scalable digital experiences.
      </motion.p>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={item}
            whileHover={{ scale: 1.06, rotate: -1, boxShadow: "0 12px 30px rgba(0,0,0,0.18)" }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <div className="icon-wrapper">
              <i className={skill.icon} aria-hidden="true"></i>
            </div>

            <h3>{skill.name}</h3>

            <div className="skill-bar" aria-hidden="true">
              <motion.div
                className="fill"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.2, delay: 0.25 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
