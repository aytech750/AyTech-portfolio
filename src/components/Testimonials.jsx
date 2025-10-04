import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "John Doe",
      rating: 5,
      feedback: "Ay Tech delivered an amazing web app ahead of schedule!",
    },
    {
      name: "Sarah Smith",
      rating: 4,
      feedback: "Clean UI/UX and great communication throughout the project.",
    },
  ]);

  const [newFeedback, setNewFeedback] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [name, setName] = useState("");

  const addTestimonial = () => {
    if (!name || !newFeedback || newRating === 0) return alert("Complete all fields!");
    const newTestimonial = { name, rating: newRating, feedback: newFeedback };
    setTestimonials([newTestimonial, ...testimonials]);
    setName("");
    setNewFeedback("");
    setNewRating(0);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Client <span>Testimonials</span>
      </motion.h2>

      <motion.div
        className="testimonial-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="stars">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} color="#ffbf00" />
              ))}
            </div>
            <p>"{t.feedback}"</p>
            <h4>- {t.name}</h4>
          </motion.div>
        ))}
      </motion.div>

      <div className="testimonial-form">
        <h3>Leave a Review</h3>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your feedback..."
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
        />
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              color={i < newRating ? "#ffbf00" : "#ccc"}
              onClick={() => setNewRating(i + 1)}
            />
          ))}
        </div>
        <button onClick={addTestimonial}>Submit</button>
      </div>
    </section>
  );
}
