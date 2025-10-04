import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/TDRQ4485.PNG";
import project2 from "../assets/VZRG2523.PNG";
import project3 from "../assets/NAJX3999.PNG";

const projects = [
  {
    title: "Freenium Data Platform",
    description: "A modern VTU platform for airtime, data, and bills payment with Paystack integration and Firebase backend.",
    image: project1,
    tech: ["React", "Firebase", "Node.js", "Paystack API"],
    liveLink: "https://freeniumdata.vercel.app",
    codeLink: "https://github.com/aytechdev/freenium-data",
  },
  {
    title: "OsunRide App",
    description: "A sleek ride-hailing mobile app for booking and tracking rides, built with React Native and Firebase.",
    image: project2,
    tech: ["React Native", "Firebase", "Google Maps API"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A fully responsive developer portfolio built with React, showcasing projects, skills, and animations.",
    image: project3,
    tech: ["React", "Framer Motion", "CSS3"],
    liveLink: "#",
    codeLink: "https://github.com/aytechdev/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured <span>Projects</span>
      </motion.h2>

      <motion.p
        className="projects-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A collection of my favorite works — designed and developed with creativity and precision.
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                  View Project
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn secondary">
                  Source Code
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
