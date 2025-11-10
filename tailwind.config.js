/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs' : '250px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      //for medium devices
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'primary-dark': '#1a1a1a',
        'secondary-dark': '#2c2c2c',
        'accent': '#e9aa22',
      },
    },
  },
  plugins: [],
}
