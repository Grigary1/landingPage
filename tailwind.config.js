/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(166deg, rgba(235,224,224,1) 0%, rgba(227,239,242,1) 56%, rgba(239,172,244,1) 100%)',
      }
    },
  },
  plugins: [],
}

