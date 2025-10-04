import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <nav className={`navbar ${animate ? "animate" : ""}`}>
      <div className="logo">AyTech Digital</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#newsletter">Subscribe</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
