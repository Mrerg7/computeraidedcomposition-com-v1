/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        score: {
          50: '#f4f5f7',
          100: '#e6e8ed',
          200: '#cfd3dc',
          700: '#3a4150',
          800: '#2a303c',
          900: '#1c212b',
          950: '#0e1116',
        },
        note: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      letterSpacing: { widestx: '0.2em' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
