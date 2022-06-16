/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ACB992',
        'primary-dark': '#464E2E',
        'secondary': '#E9E5D6',
        'secondary-dark': '#362706',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        white: "#FFF",  
        black: "#000",
      },
    },
  },
  plugins: [],
}
