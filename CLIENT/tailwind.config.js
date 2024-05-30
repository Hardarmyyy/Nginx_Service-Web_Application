/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
      colors: {
        'crimson': {
          light: '#F56991',
          DEFAULT: '#DC143C'
        },
        'dropdown': {
          DEFAULT: '#181818'
        },
        'my-bg': {
            primary: '#333333',
            DEFAULT: 'rgb(16, 15, 15, 0.6)'
          }
      },
      fontFamily: {
        'Jost': ['Jost', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}