/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['barlow', 'sans-serif']
      },
      colors: {
        'lightText': '#5E5E5E',
        'btnColor': '#3490EC',
      },
      fontSize: {
        'xxs': '0.5rem',
      },
    },
  },
  plugins: [],
}

