/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "crftd-purple": "#9B91FA",
        "crftd-purple-dark": "#191932",
        "crftd-gray": "#707070",
        "crftd-white": "#F2F2F2",
      },
    },
  },
  plugins: [],
}
