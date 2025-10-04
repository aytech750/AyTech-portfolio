import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Project from './components/Project.jsx';
import Testimonials from './components/Testimonials.jsx';
import Resume from './components/Resume.jsx';
import Newsletter from './components/Newsletter.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Testimonials />
      <Resume />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
