import React, { useState, useEffect } from 'react';
import pic1 from '../assets/images/IMG_E3462.JPG';
import pic2 from '../assets/images/IMG_E3463.JPG';
import pic3 from '../assets/images/IMG_E3464.JPG';

const images = [pic1, pic2, pic3];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <section id="hero" className="hero">
      <div
        className="hero-slider"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className={`hero-overlay ${fade ? 'fade-in' : 'fade-out'}`}>
          <h2>Hi, I'm Ay Tech</h2>
          <p>Full Stack Developer | Building modern web & mobile apps</p>
          <button>See My Work</button>
        </div>

        {/* Arrows */}
        <button className="arrow left" onClick={prevSlide}>&#10094;</button>
        <button className="arrow right" onClick={nextSlide}>&#10095;</button>

        {/* Dots */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
