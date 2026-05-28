/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        heading: ["'Anton'", "sans-serif"],
        sans: ["'Outfit'", "sans-serif"],
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
}
