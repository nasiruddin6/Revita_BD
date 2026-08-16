/**
 * REVITA Bangladesh — design tokens
 *
 * Single source of truth for color, type, spacing, radius, and shadow.
 * Tailwind maps these in `tailwind.config.js`. Import here from JS when
 * a value is needed outside of class names (charts, inline styles, etc.).
 */

export const colors = {
  primary: {
    50: '#F4FBF8',
    100: '#E5F5EE',
    200: '#C5E7D7',
    300: '#94D1B5',
    400: '#47AE7E',
    500: '#2A845A',
    600: '#186742',
    700: '#0F5132',
    800: '#0B3D25',
    900: '#072C1B',
    DEFAULT: '#0F5132',
  },
  secondary: {
    50: '#FDFDFC',
    100: '#F9F8F6',
    200: '#F2F0EE',
    300: '#E9E6E2',
    400: '#D6D2CD',
    500: '#B9B3AC',
    600: '#8E857B',
    700: '#6B6157',
    800: '#4A423A',
    900: '#2F2823',
    DEFAULT: '#F9F8F6',
  },
  accent: {
    50: '#FCF8EE',
    100: '#F8EDD3',
    200: '#EED7A0',
    300: '#E2BC65',
    400: '#D5A534',
    500: '#B88A1E',
    600: '#A57912',
    700: '#825F0D',
    800: '#644A0C',
    900: '#47350B',
    DEFAULT: '#D5A534',
  },
}

export const fontFamily = {
  heading: ['Poppins', 'Noto Sans Bengali', 'sans-serif'],
  body: ['Inter', 'Noto Sans Bengali', 'sans-serif'],
  bengali: ['Noto Sans Bengali', 'sans-serif'],
  sans: ['Inter', 'Noto Sans Bengali', 'sans-serif'],
}

export const borderRadius = {
  none: '0',
  sm: '0.375rem',
  DEFAULT: '0.5rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  card: '1rem',
  button: '0.5rem',
  input: '0.5rem',
  full: '9999px',
}

export const boxShadow = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(8 46 29 / 0.05)',
  soft: '0 2px 8px 0 rgb(8 46 29 / 0.06)',
  card: '0 4px 20px -2px rgb(8 46 29 / 0.08), 0 2px 8px -2px rgb(8 46 29 / 0.04)',
  elevated:
    '0 16px 40px -12px rgb(8 46 29 / 0.16), 0 8px 16px -8px rgb(8 46 29 / 0.08)',
  cta: '0 10px 24px -6px rgb(213 165 52 / 0.40)',
  focus: '0 0 0 3px rgb(15 81 50 / 0.20)',
}

/** Semantic spacing on top of Tailwind’s default scale */
export const spacing = {
  gutter: '1.5rem',
  'section-xs': '2.5rem',
  'section-sm': '3.5rem',
  section: '5rem',
  'section-lg': '7rem',
  'section-xl': '9rem',
}

export const maxWidth = {
  container: '75rem',
  content: '40rem',
  prose: '42rem',
}

export const tokens = {
  colors,
  fontFamily,
  borderRadius,
  boxShadow,
  spacing,
  maxWidth,
}

export default tokens
