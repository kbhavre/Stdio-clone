/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myBlack: "#03001C",
        primary: "#B6EADA",
        secondary: "#5B8FB9",
        accent: "#301E67"
      }
    },
  },
  plugins: [],
}

