/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          DEFAULT: '#050505',
          50: '#0a0a0a',
          100: '#0f0f0f',
          200: '#141414',
          300: '#1a1a1a',
          400: '#1f1f1f',
          500: '#2a2a2a',
          600: '#333333',
          700: '#444444',
        },
        light: {
          DEFAULT: '#e8e8e3',
          50: '#fafaf8',
          100: '#f0f0ec',
          200: '#e8e8e3',
          300: '#d4d4cd',
          400: '#a8a89f',
          500: '#71717a',
          600: '#52525b',
        },
        accent: {
          DEFAULT: '#c8a96e',
          light: '#d4bc8a',
          dark: '#b8964f',
        },
      },
    },
  },
  plugins: [],
}