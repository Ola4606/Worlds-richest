/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Abril Fatface",
        header: "Space Mono",
        casual: "Mulish"
      },

      screens: {
        'x-sm': '425px',
      },
    },
  },
  plugins: [],
}
