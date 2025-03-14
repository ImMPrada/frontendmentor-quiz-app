/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: '#A729F5', // RGB: 167, 41, 245 - HSL: 277°, 91%, 56%
      navy: {
        DEFAULT: '#313E51', // RGB: 49, 62, 81 - HSL: 216°, 25%, 25%
        dark: '#3B4D66',    // RGB: 59, 77, 102 - HSL: 215°, 27%, 32%
      },
      grey: {
        DEFAULT: '#626C7F', // RGB: 98, 108, 127 - HSL: 219°, 13%, 44%
        light: '#ABC1E1',   // RGB: 171, 193, 225 - HSL: 216°, 47%, 78%
      },
      white: {
        DEFAULT: '#FFFFFF', // RGB: 255, 255, 255 - HSL: 0°, 0%, 100%
        light: '#F4F6FA',   // RGB: 244, 246, 250 - HSL: 220°, 38%, 97%
      },
      green: '#26D782',     // RGB: 38, 215, 130 - HSL: 151°, 70%, 50%
      red: '#EE5454',       // RGB: 238, 84, 84 - HSL: 0°, 82%, 63%
    },
    extend: {
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