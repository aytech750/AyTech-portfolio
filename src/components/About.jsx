import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/images/IMG_E3462.JPG"; // ✅ Import your profile picture


export default function AboutMe() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimate(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="about">
      <div className={`about-content ${animate ? "animate" : ""}`}>
        {/* ✅ Profile Image */}
        <div className="about-image">
          <img
            src={profileImg}
            alt="Michael Ayomide Johnson - Ay Tech"
            className="profile-pic"
          />
        </div>

        {/* ✅ About Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m <span className="highlight">Michael Ayomide Johnson</span>, also
            known as <strong>Ay Tech</strong> — a{" "}
            <strong>Full Stack & Mobile Developer</strong> with{" "}
            <strong>1 years of professional experience</strong>.
          </p>
          <p>
            I specialize in building scalable applications using{" "}
            <span className="highlight">React, Node.js, Firebase, and Flutter</span>,
            with expertise in <span className="highlight">UI/UX design, database
            management, deployment, and hosting</span>.
          </p>
          <p>
            My key projects include <strong>Luna</strong> and{" "}
            <strong>Freenium Data</strong>, where I combined creativity and
            technology to deliver innovative digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
