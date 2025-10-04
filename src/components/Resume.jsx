import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <motion.section
      id="resume"
      className="resume-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="resume-title">My Resume</h2>
      <p className="resume-subtitle">
        Here’s a visual version of my professional resume. You can view it below
        or download a copy for reference.
      </p>

      <div className="resume-button-wrapper">
        <a
          href="/images/AyTech_Resume.PNG"
          download
          className="resume-download-btn"
        >
          <Download size={22} />
          Download Resume
        </a>
      </div>

      <div className="resume-image-wrapper">
        <motion.img
          src="/images/AyTech_Resume.PNG"
          alt="AyTech Resume"
          className="resume-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.section>
  );
}
