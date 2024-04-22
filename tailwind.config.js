/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,jsx,ts}"],
  darkMode: 'selector',
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
}