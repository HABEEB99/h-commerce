/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#FFFFFF",
        darkBg: "#1D1E2C",
        btn: "#9C528B",
        icon: "#D7CDCC",
        modal: "#59656F",
      },
    },
  },
  plugins: [],
};
