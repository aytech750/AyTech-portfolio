import React, { useState, useEffect, useRef } from 'react';
import sunIcon from '../assets/icon/moon.png';
import moonIcon from '../assets/icon/brightness.png';

export default function Navbar() {
  const navbarRef = useRef(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    setTimeout(() => {
      navbar.classList.add('animate');
    }, 100);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav ref={navbarRef} className="navbar">
      <div className="logo">Ay Tech</div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li> 
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#newsletter">Subscribe</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Theme toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        <img
          src={theme === 'light' ? moonIcon : sunIcon}
          alt={theme === 'light' ? 'Dark mode' : 'Light mode'}
        />
      </button>
    </nav>
  );
}
