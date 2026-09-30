/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0f6f6',
          100: '#d9e8e6',
          200: '#b3d0cc',
          300: '#84b3ad',
          400: '#4f8c84',
          500: '#2f6f67',
          600: '#1f5a53',
          700: '#1a4a44',
          800: '#143833',
          900: '#0d2522',
          950: '#081816',
        },
        gold: {
          50: '#fbf6ec',
          100: '#f3e6c4',
          200: '#e7cd8c',
          300: '#d9b45a',
          400: '#c99c3a',
          500: '#b8862e',
          600: '#9a6f28',
          700: '#7a5622',
          800: '#5e421c',
          900: '#4a341a',
        },
        sand: {
          50: '#faf7f0',
          100: '#f4eede',
          200: '#e9dcc0',
          300: '#dcc8a0',
        },
        ink: {
          900: '#141817',
          800: '#1c2220',
          700: '#262d2b',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
