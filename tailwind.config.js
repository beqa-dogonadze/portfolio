/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '700px',
      md: '701px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        fiera: ['Fira Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
