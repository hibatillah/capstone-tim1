const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    fontFamily: {
      outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      flex: {
        fill: "1 0 0%",
      },
      colors: {
        black: {
          light: "#2E333F",
          DEFAULT: "#2B2D31",
          dark: "#222731",
        },
        primary: {
          light: "#E62129",
          DEFAULT: "#E62129",
        },
        secondary: "#6AD2FF",
        tertiary: "#2B3674",
        grey: {
          light: "#F4F7FF",
          DEFAULT: "#DCDCDC",
          dark: "#A3AED0",
        },
      },
    },
  },
  plugins: [],
};