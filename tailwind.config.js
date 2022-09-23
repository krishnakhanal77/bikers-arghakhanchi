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
  },
  plugins: [],
}
