import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './builder/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#DBDBDB',
        navy: '#061B3A',
        orange: '#FF9F0A',
        paper: '#F7F7F5',
        dark: '#07111F'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,159,10,0.18), 0 30px 80px rgba(6,27,58,0.14)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(255,159,10,0.18), transparent 40%), radial-gradient(circle at 80% 20%, rgba(6,27,58,0.12), transparent 30%)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-bebas)', 'sans-serif'],
        groove: ['var(--font-space)', 'sans-serif']
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' }
        },
        floaty: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-8px,0) scale(1.03)' }
        },
        grain: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-4%, -4%, 0)' }
        }
      },
      animation: {
        drift: 'drift 10s ease-in-out infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        grain: 'grain 12s steps(2) infinite'
      }
    }
  },
  plugins: []
};

export default config;