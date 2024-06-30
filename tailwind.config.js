/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
    theme: {
    extend: {
      fontFamily: {
        'aptos': ['aptos', 'sans-serif'],
        'type': ["Archivo"],
      },
      colors : {
        'b': '#3E5760',
        'w': '#FAF8F6',
        's': '#A78377',
        'r': '#604537'
      }
    },
  },
  plugins: [],
}