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
        customblack :'rgba(31, 29, 43, 1)',
        homeicon :'rgba(234, 124, 105, 1)',
      },
      height :{
        sidebar: [500]
      }
    },
  },
  plugins: [],
}

