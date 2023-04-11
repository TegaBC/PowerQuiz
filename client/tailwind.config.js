/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ffb93f',
        'main2': '#ed9434'
      },

      fontFamily: {
        "sans": ['Montserrat', 'sans-serif']
      },
    },

  },
  plugins: [],
}

