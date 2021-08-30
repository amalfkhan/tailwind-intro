// default values will still be used unless something in this file overwrites them

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
