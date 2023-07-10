/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      container:{
        center:true,
        screens:{
          sm: '68.4375rem'
        }
      },
      fontFamily: {
        main: 'Segoe UI'
      },
      colors: {
        blue: '#1998DE',
        white: '#FFFFFF',
        grey1: '#F8F8F8',
        grey2: '#F4F4F4',
        grey3: '#E7E7E7',
        greyDark1: '#464646',
        greyDark2: '#373737',
        greyDark3: '#2C2C2C',
        greyDark4: '#222222',
        greyDark5: '#1D1D1D',
        greyDark6: '#1D1D1D',
        black: '#171717'
      },
      spacing: {
        1: '.3125rem',
        2: '.625rem',
        3: '.9375rem',
        4: '1.25rem',
        5: '1.5625rem',
        6: '1.875rem',
        12: '4.375rem'
      }
    },
  },
  plugins: [],
}

