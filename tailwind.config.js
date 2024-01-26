/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customgray :'rgba(59, 58, 58, 1)',
        customblack :'rgba(31, 29, 43, 1)'
      }
    },
  },
  plugins: [],
}

