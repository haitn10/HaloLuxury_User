/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
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
      third: ["Viaoda Libre", "sans-serif"],
    },
    colors: {
      primary: "#608FA3",
      second: "#B48F4C",
      "second-1": "#94753e",
      admin: "#F0F0F0",
      light: "#FFFFFF",
      red: "#DF3B3B",
      third: "#F9F9F4",
      "third-1": "#F4F5F9",
      "third-2": "#F9F5F4",
      gray: "#888888",
      green: "#30A134",
    },
    textColor: {
      primary: "#080808",
      second: "#888888",
      third: "#E42C14",
      light: "#FFFFFF",
      yellow: "#B48F4C",
      blue: "#608FA3",
      gray: "#888888",
      red: "#DF3B3B",
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
        150: "150px",
        195: "195px",
        225: "225px",
        275: "275px",
        350: "350px",
        450: "450px",
        550: "550px",
        700: "700px",
        800: "800px",
        950: "950px",
      },
      fontSize: {
        400: "400px",
      },
      margin: {
        18: "70px",
      },
      borderRadius: {
        full: "100%",
      },
    },
  },
  plugins: [],
});
