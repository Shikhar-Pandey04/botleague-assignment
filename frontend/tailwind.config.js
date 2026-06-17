/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0f0f11',      // Main background color
        cardBg: '#1a1a1d',      // Card background
        brandRed: '#f93943',    // Neon red from design
        brandOrange: '#f5a623', // Orange accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional clean font
        heading: ['Orbitron', 'sans-serif'], // Robotic/Tech font for headings
      }
    },
  },
  plugins: [],
}