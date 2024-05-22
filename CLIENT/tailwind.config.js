/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson': {
          light: '#F56991',
          DEFAULT: '#DC143C'
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