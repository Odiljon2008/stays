/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ' "Poppins" , sans-serif',
      },
      colors:{
        brand:{
          gray:{
            100:"#161D2F",
            200:"#C2D8FE",
            300:"#C2D8FE",
          }
        }
      },
    },
  },
  plugins: [],
}

