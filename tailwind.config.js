/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        one: '#D0ECF3',
        two: '#26346E',
        three: '#F69320',
        four: '#F0B950',
      },
    },
  },
  plugins: [],
}
