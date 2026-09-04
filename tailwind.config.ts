import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#ede6d9',
          300: '#e0d4be',
          400: '#d4bfa0',
          500: '#c9a882',
          600: '#b8966b',
          700: '#9d7d57',
          800: '#7a5f42',
          900: '#5d4633',
        },
        sage: {
          50: '#f8faf7',
          100: '#f0f3ed',
          200: '#e0e9dc',
          300: '#c4d8be',
          400: '#a8c6a0',
          500: '#8cb588',
          600: '#6f9c6e',
          700: '#5a8257',
          800: '#456643',
          900: '#354c32',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
