module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        appear: 'appear 0.4s forwards',
        blob: 'blob 12s infinite'
      },
      colors: {
        primary: '#303052',
        secondary: '#f4f4fe',
        selected: '#1d1d32'
      },
      fontFamily: {
        comfortaa: "'Comfortaa', cursive"
      },
      keyframes: {
        appear: {
          from: {
            transform: 'translate(-2rem, 0)',
            opacity: '0'
          },
          to: {
            transform: 'translate(0rem, 0rem)',
            opacity: '1'
          }
        },
        blob: {
          '0%': {
            transform: 'translate(0, 0) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -20px) scale(1.1)',
            'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%'
          },
          '66%': {
            transform: 'translate(25px, 25px) scale(0.9)',
            'border-radius': '60% 40% 18% 82% / 30% 82% 18% 70%'
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)'
          }
        }
      },
      padding: {
        p125: '12.5%',
      },
      width: {
        '896px': '896px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
