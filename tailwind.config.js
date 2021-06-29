module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      1: "1px",
    },
    extend: {
      colors: {
        blue: "#4D81E8",
        lightblue: "#B8D0FF",
        darkgray: "#292929",
        lightgray: "#808080",
        navborder: "#B1B1B1",
        widgetborder: "#88909F",
        textbg: "#F8F8F8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
