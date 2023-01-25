/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {
      font: {
        myFont: 'Montserrat'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
