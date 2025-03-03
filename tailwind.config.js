/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customgrey: '#2D3854',
        customblue: '#00CCFF',
      },
      boxShadow: {
        'custom': '1px 1px 4px #00CCFF', // Custom shadow
      }
    },
  },
  plugins: [],
}

