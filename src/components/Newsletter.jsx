import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    setMessage(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="newsletter">
      {/* Title */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Subscribe to Our Newsletter
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Get the latest updates directly to your inbox.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="newsletter-form"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Email input */}
        <motion.input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Subscribe
        </motion.button>
      </motion.form>

      {/* Success/Error Message */}
      {message && (
        <motion.p
          className="message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {message}
        </motion.p>
      )}
    </section>
  );
}
