/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'off-white': '#e5e5e5',
        'trans-white-1': 'rgba(255, 255, 255, .25)',
        'trans-white-2': 'rgba(255, 255, 255, .1)',
        'blue-1': '#62b8f5',
        'blue-2': '#4475ef',
        'shadow': 'rgba(3, 46, 87, .2)',
      },
    },
  },
  plugins: [],
}