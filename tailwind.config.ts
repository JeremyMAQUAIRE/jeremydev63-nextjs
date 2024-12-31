import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nightBlue: '#002349',
        gold: '#c0a360',
      },
    },
    animation: {
      spinIn: 'spinIn 2s ease-out', // Durée et timing de l'animation
    },
    keyframes: {
      spinIn: {
        '0%': { transform: 'rotate(0deg) scale(0)', opacity: '0' },
        '50%': { transform: 'rotate(180deg) scale(1.1)', opacity: '0.8' },
        '100%': { transform: 'rotate(360deg) scale(1)', opacity: '1' },
      },
    },
  },
  plugins: [],
} satisfies Config;
