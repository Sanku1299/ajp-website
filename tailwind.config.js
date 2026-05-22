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
      },
      fontFamily: {
        display: ['Impact', 'Haettenschweiler', '"Arial Narrow Bold"', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        orange: '0 0 0 1px rgba(241,90,8,.55), 0 20px 60px rgba(0,0,0,.35)',
      },
      backgroundImage: {
        grit:
          'radial-gradient(circle at 12% 8%, rgba(255,106,24,.14), transparent 22rem), radial-gradient(circle at 78% 12%, rgba(255,106,24,.1), transparent 24rem), linear-gradient(135deg, rgba(255,255,255,.035) 0 1px, transparent 1px 8px)',
      },
    },
  },
  plugins: [],
};
