/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      second: ["Roboto", "serif"],
    },
    colors: {
      primary: "#608FA3",
      second: "#B48F4C",
      admin: "#F0F0F0",
    },
    textColor: {
      primary: "#080808",
      second: "#888888",
      third: "#E42C14",
      light: "#FFFFFF",
    },
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
    },
    borderRadius: {
      10: "10px",
      20: "20px",
    },
    extend: {
      spacing: {
        1: "1px",
        25: "25px",
        35: "35px",
        55: "55px",
        65: "65px",
        75: "75px",
        100: "100px",
        195: "195px",
      },
    },
  },
  plugins: [],
};
