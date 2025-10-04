import React, { useEffect, useRef } from 'react';

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    // Animate on mount
    setTimeout(() => {
      navbar.classList.add('animate');
    }, 100);
  }, []);

  return (
    <nav ref={navbarRef} className="navbar">
      <div className="logo">Ay Tech</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li> 
        <li><a href="#project">Projects</a></li>
        <li><a href="#newsletter">Subcribe</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
