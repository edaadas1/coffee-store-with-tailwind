/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'brown':'#4F200D',
        'nav-text' :'#E3CCAE',
        'caramel' : '#C07F00',
        'orange' : '#FF6000',
        'beige' : '#CBB279'
      },
      fontSize:{
        'big-title' : '72px',
        'nav-title-size' : '30px',
        'nav-item-size' : '20px'
      },
      fontFamily:{
        'gemunu' : ['Gemunu Libre', 'sans-serif']
      },
      height : {
        'coffee-img' : "498px"
      }
    },
  },
  plugins: [],
}

