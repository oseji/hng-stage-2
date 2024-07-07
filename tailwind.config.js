/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        figmaOrange: "#EB8F05",
        figmaGray: "#3A4F41",
        figmaPaleOrange: "#FFEBCD",
      },
    },
  },
  plugins: [],
};
