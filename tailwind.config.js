module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray : {
          400 : '#969798',
          500 : '#666666',
          700 : '#353535',
          800 : '#262626',
          900 : '#171818',
        },
        bgColor: {
          start: '#16222A',
          stop: '#16222A',
        }
      },
      fontFamily: {
        'serif': ['GeneralSans']
      }
    },
  },
  plugins: [],
}
