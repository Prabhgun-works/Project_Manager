const { patterns } = require('tailwindcss-patterns');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      patterns: {
        opacities: { default: '0.1' },
        sizes: { default: '20px' },
      },
    },
  },
  plugins: [patterns],
};
