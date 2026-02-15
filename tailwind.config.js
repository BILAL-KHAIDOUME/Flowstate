/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./js/**/*.js"],
  theme: {
    extend: {
       textStrokeWidth: {
        1: '1px' ,
        2: '2px' ,
      },
      textStrokeColor: {
        black: '#000' ,
        white: '#fff' ,
      },
      fontFamily: {
        inika: ['Inika', 'serif'], // Add the Inika font as "inika" family
      },
      colors: {
        customGreen: '#008768',// Custom green color
        customgray: '#FBFAFA',
        lightgreen: '#85F085',
        lightgray:'#D9D9D9',
        brad:'#D4C6C6',
        nums:'#465946',
        customorange: '#FF6F00',
        customyellow: '#FFF4C7',
        ding:'#EFEFEF',
        dong:'#A3A1A1'
  
      },
    },
  },
  plugins: [],
}

