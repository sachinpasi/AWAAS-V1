module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      1: "1px",
      2: "2px",
      4: "4px",
    },
    extend: {
      colors: {
        blue: "#4D81E8",
        lightblue: "#B8D0FF",
        darkgray: "#292929",
        lightgray: "#808080",
        extralightgray: "#F3F3F3",
        navborder: "#B1B1B1",
        widgetborder: "#88909F",
        projectsborder: "#E9E9E9",
        textbg: "#F8F8F8",
        navtext: "#4F525A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
