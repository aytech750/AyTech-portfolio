import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/images/IMG_E3462.JPG'; // Replace with your profile pic

const skillSets = [
  ["React ⚛️", "Node.js ⚡", "Firebase 🔥"],
  ["HTML 🌐", "CSS 🎨", "JavaScript 🟨"],
  ["TailwindCSS ✨", "MongoDB 🍃", "Express ⚡"]
];

export default function About() {
  const aboutRef = useRef(null);
  const [currentSet, setCurrentSet] = useState(0);
  const [fade, setFade] = useState(true);

  // Scroll animation for about section
  useEffect(() => {
    const aboutContent = aboutRef.current;

    const onScroll = () => {
      const trigger = window.innerHeight - 100;
      const top = aboutContent.getBoundingClientRect().top;
      if (top < trigger) {
        aboutContent.classList.add('animate');
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Rotate skills every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % skillSets.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content" ref={aboutRef}>
        <div className="profile-wrapper">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate Full Stack Developer dedicated to crafting modern, responsive, and high-performance web and mobile applications.
          </p>
          <p>
            My expertise spans React, Node.js, and modern front-end frameworks, allowing me to build engaging, interactive, and seamless user experiences.
          </p>

          {/* Rotating Skills */}
          <div className={`hero-keywords ${fade ? 'fade-in' : 'fade-out'}`}>
            {skillSets[currentSet].map((skill, index) => (
              <span key={index} className="keyword">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
