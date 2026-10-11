/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: { terracotta: '#A3432F', olive: '#4A604D', paper: '#FAF8F5', ink: '#1C1917' },
      fontFamily: { display: ['"Bodoni Moda"', 'serif'], sans: ['"Plus Jakarta Sans"', 'sans-serif'], serif: ['"Source Serif 4"', 'serif'] },
      boxShadow: { cover: '18px 22px 35px -18px rgba(28,25,23,.5)' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
