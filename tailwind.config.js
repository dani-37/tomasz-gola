/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'aptos': ['aptos', 'sans-serif'],
      },
      colors : {
        'b': '#3E5760',
        'w': '#FAF8F6',
        's': '#A78377'
      }
    },
  },
  plugins: [],
}