const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx}"
  ],
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
        fill: "1 0 auto",
      },
      colors: {
        black: {
          light: '#2F2F2F',
          DEFAULT: "#1F1F1F",
          dark: "#1C1C1C",
        },
        primary: "#775FFD",
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
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.tertiary"),
        },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
        p: { color: theme("colors.grey.dark") },
      });
      addComponents({
        ".btn": {
          borderRadius: theme("borderRadius.lg"),
          paddingInline: theme("spacing.6"),
          paddingBlock: theme("spacing.2"),
          fontWeight: theme("fontWeight.medium"),
          cursor: "pointer",
          "&.btn-primary": {
            backgroundColor: theme("colors.primary"),
            color: theme("colors.white"),
          },
          "&.btn-secondary": {
            backgroundColor: theme("colors.inherit"),
            color: theme("colors.primary"),
            borderWidth: theme("spacing.px"),
            borderColor: theme("colors.primary"),
          },
        },
      });
    }),
  ],
};
