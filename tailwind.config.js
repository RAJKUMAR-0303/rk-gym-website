/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
          lighter: 'rgb(var(--color-primary-lighter) / <alpha-value>)',
          lightest: 'rgb(var(--color-primary-lightest) / <alpha-value>)',
        },
        white: 'rgb(var(--color-text) / <alpha-value>)',
        black: 'rgb(var(--color-bg) / <alpha-value>)',
        accent: {
          DEFAULT: '#f97316', // neon orange
          hover: '#ea580c',
          glow: 'rgba(249, 115, 22, 0.4)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
