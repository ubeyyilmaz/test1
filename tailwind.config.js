/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  
  theme: {
    extend: {
      colors:{
        gray:{
          400:'#969798',
          500:'#666666',
          700:'#353535',
          800:'#262626',
          900:'#171818'
        }
      }
    },
  },
  plugins: [],
}