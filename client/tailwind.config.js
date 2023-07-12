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
          light: "#1f2025",
          DEFAULT: "#2B2D31",
          dark: "#26292e",
        },
        primary: {
          light: "#d2353b",
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
    debugScreens: {
      ignore: ["dark"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
