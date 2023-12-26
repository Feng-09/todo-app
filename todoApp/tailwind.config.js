/** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ['class', '[data-mode="dark"]'],
// }
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens: {
      'ws': '520px',
      'xws': '820px',
      'laptop': '640px',
    },
  },
  plugins: [],
  darkMode: 'class'
}

