/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: `rgb( var(--background) / <alpha-value> )`,
      },
    },
  },
  plugins: [],
};
