/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: "Abril Fatface",
        casual: "Poppins"
      }
    },
  },
  plugins: [],
}
