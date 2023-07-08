/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      filter: {
        'drop-shadow': 'drop-shadow(2px 4px 6px #4b7bec)',
      },
      
      

    },
  },
  plugins: [],
}

