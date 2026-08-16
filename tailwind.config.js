import {
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  maxWidth,
  spacing,
} from './src/theme/tokens.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors,
      fontFamily,
      borderRadius,
      boxShadow,
      spacing,
      maxWidth,
    },
  },
  plugins: [],
}
