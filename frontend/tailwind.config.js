// frontend/tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-purple': '#8e24aa',
        'brand-pink': '#ff4081',
      },
      boxShadow: {
        'card': '0 4px 24px 0 rgba(80, 0, 120, 0.08)',
      },
    },
  },
  plugins: [],
};