/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // all your React/Vite files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4e54c8",
        secondary: "#ff7f50",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
