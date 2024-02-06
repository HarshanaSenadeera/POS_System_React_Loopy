/** @type {import('tailwindcss').Config} */
module.exports = {

  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
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
        oderbar : 'rgba(37, 36, 36, 1)',
        serchbar : 'rgba(45, 48, 62, 1)',
        button : 'rgba(229, 103, 63, 1)',
        dishes : 'rgba(31, 29, 43, 1)',
        editbutton : 'rgb(250,144,105)',


      },
      height :{
        sidebar: [550]
      },
      width :{
        searchbar :[500]
      },

    },
  },
  plugins: [],
}

