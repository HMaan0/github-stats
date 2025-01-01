/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-custom": "inset 0 0 50px rgba(255, 255, 255, 0.12)",
      },
      colors: {
        bilbao: {
          50: "#f0f9ec",
          100: "#ddf2d5",
          200: "#bfe6b0",
          300: "#98d482",
          400: "#74c15a",
          500: "#55a63c",
          600: "#397728",
          700: "#336526",
          800: "#2c5123",
          900: "#274621",
          950: "#11250e",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        //dark
        primary: "#54a53b",
        secondary: "#274521",
        accent: "#356426",
        "border-theme": "#3A3A3A",
        //light
        "light-card": "#ECECEC",
        "light-primary": "#73c45a",
        "light-secondary": "#c0deba",
        "light-accent": "#abd99b",
        "border-theme-light": "#B5B5B5",
      },
    },
  },
  plugins: [],
};
