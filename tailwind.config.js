/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { min: "0px", max: "554px" },
      nav: { min: "555px", max: "1022px" },
      pc: { min: "1022px" },
      temp: { min: "1022px", max: "1441px" },
    },
    bgGradientDeg: {
      75: "75deg",
    },
  },
  plugins: [],
};