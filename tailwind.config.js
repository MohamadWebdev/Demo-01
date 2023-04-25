
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        yellowtail: ['"Yellowtail"']
      },
      colors: {
        primary: "#303030",
        secondary: "#e8631c",
        third: "#b44c06",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xxl: "1400px",
        xl: "1300px",
        lg: "1000px",
        xs: "480px"
      },
      backgroundImage: {
        'imgBg': `url('./src/assets/bg.jpg')`,
        'img-mask': `url('./src/assets/mask.png')`,
        'imgBg2': `url('./src/assets/bg2.png')`,
      }
    },
  },
  plugins: [],
};