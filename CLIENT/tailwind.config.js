/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3.5s linear infinite'
      },
      keyframes: {
        spin: {
          '25%': { transform: 'scale(.5)' },
          '50%': { transform: 'scale(.75)' },
          '75%': { transform: 'scale(W.75)' },
          '100%': { transform: 'scale(1)' },
        },
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
      },
      screens: {
        'xsm': {'max': '425px'},
        // => @media (max-width: 1024px) { ... }
        'tablet': {'max': '768px'},
        // => @media (max-width: 1024px) { ... }
        
        'laptop': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }

        'super': {'min': '2560px'},
        // => @media (max-width: 1024px) { ... }
      }
    },
  },
  plugins: [],
}