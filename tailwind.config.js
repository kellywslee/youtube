/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ff0000',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
