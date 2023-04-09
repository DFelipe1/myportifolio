/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'JetBrains Mono, sans-serif',
      },

      colors: {
        RaisinBlack: '#191622',
        DarkPurple: '#312945',
        EnglishViolet: '#483C67',
        PersianPink: '#FF79C6',
        LightGreen: '#67E480',
        Text: '#F2F2F2'
      },

      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        loop: {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100%)'}
        }
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        loop: 'loop 25s infinite linear ',
      },
    },
      
  },
  plugins: [],
}

