/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',"./src/**/*.{jsx,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        stone: {
         900: '#1f2335',
        },
        white:'#F2EBDC',
       
      },
      fontFamily: {
        inter: ['inter', 'serif'],
    },
  },

  plugins: [],
}
}

