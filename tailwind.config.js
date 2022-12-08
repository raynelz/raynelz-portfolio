/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink: "#ff79c6",
        purple: "#bd93f9",
        comment: "#282a36",
        cyan: "#8be9fd",
      },
      fontFamily: {
        burtons: "burtons",
        montserrat: "montserrat",
      },
    },
  },
  plugins: [],
}