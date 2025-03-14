/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        purple: {
          DEFAULT: '#A729F5',
          hover: '#B942FF',
        },
        // Neutral Colors
        navy: {
          DEFAULT: '#313E51',
          dark: '#3B4D66',
        },
        grey: {
          DEFAULT: '#626C7F',
          light: '#ABC1E1',
        },
        light: {
          DEFAULT: '#F4F6FA',
          blue: '#EDF1F9',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'heading-l': ['4rem', { lineHeight: '4.5rem', fontWeight: '500' }],
        'heading-m': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '500' }],
        'heading-s': ['1.25rem', { lineHeight: '1.5rem', fontWeight: '500' }],
        'body-m': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'body-s': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} 