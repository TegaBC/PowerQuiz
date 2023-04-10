/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ffb93f'
      },

      fontFamily: {
        "sans": ['Montserrat', 'sans-serif']
      },
    },

  },
  plugins: [],
}

