/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
