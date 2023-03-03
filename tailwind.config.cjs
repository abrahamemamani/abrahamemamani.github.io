/* eslint-disable @typescript-eslint/semi */
/* eslint-disable comma-dangle */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'prompt': 'Prompt'
      },
      colors: {
        main: '#65DC94',
        secondary: '#2D2E32',
        'dark-grey': '#22232A',
        'light-grey': '#B6B6B8',
        accent: '#00A19C'
      },
      screens: {
        xsm: '375px',
        '1xl': '1440px',
      },
    },
  },
  plugins: [],
}
