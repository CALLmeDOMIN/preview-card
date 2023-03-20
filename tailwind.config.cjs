/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Fraunces: ['Fraunces', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

module.exports = config;