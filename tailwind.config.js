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
        pink600: "#FE32A6",
        purple: "#bd93f9",
        purple600: "#8042D6",
        comment: "#282a36",
        cyan: "#8be9fd",
        blacky: "#213547",
      },
      fontFamily: {
        burtons: "burtons",
        inter: 'Inter',
        montserrat: "montserrat",
      },
    },
  },
  plugins: [],
}