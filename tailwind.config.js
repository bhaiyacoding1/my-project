/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      'move-left': 'move-left 1s linear infinite',
      'move-right': 'move-right 1s linear infinite',
      'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      wave: 'wave 1s ease-in-out infinite',
    },
    keyframes: {
      'move-left': {
        '0%': {
          transform: 'translateX(0%)',
        },
        '100%': {
          transform: 'translateX(-50%)',
        },
      },
      'move-right': {
        '0%': { transform: 'translateX(-205%)' },
        '100%': { transform: 'translateX(0)' },
      },
      ping: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '75%, 100%': { transform: 'scale(2)', opacity: '0' },
      },
      wave: {
        '0%': { transform: 'rotate(0deg)' },
        '20%': { transform: 'rotate(-20deg)' },
        '40%': { transform: 'rotate(20deg)' },
        '60%': { transform: 'rotate(-10deg)' },
        '80%': { transform: 'rotate(10deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
    },
  },
  plugins: [],
}

