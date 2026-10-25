/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#12294A',
          dark: '#0B1B32',
          light: '#1B3B68',
        },
        teal: {
          DEFAULT: '#00969B',
          dark: '#007A7E',
          light: '#00B8BE',
          bg: '#E6F6F6',
        },
        surface: {
          DEFAULT: '#F4F7F9',
          card: '#FFFFFF',
        },
        muted: '#6B7785',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
