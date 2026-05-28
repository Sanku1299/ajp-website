/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#06111c',
        ink: '#091827',
        rust: '#f15a08',
        ember: '#ff6b18',
        bone: '#f3efe6',
        smoke: '#9fb0bf',
        brand: {
          orange: "#FF5500",
          "orange-hover": "#FF7722",
          "navy-dark": "#020617",
          "navy-main": "#070d19",
          "navy-card": "#0c1527",
          "accent-blue": "#00e5ff",
        }
      },
      fontFamily: {
        display: ['Impact', 'Haettenschweiler', '"Arial Narrow Bold"', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ["'Anton'", "sans-serif"],
      },
      boxShadow: {
        orange: '0 0 0 1px rgba(241,90,8,.55), 0 20px 60px rgba(0,0,0,.35)',
      },
      backgroundImage: {
        grit:
          'radial-gradient(circle at 12% 8%, rgba(255,106,24,.14), transparent 22rem), radial-gradient(circle at 78% 12%, rgba(255,106,24,.1), transparent 24rem), linear-gradient(135deg, rgba(255,255,255,.035) 0 1px, transparent 1px 8px)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
