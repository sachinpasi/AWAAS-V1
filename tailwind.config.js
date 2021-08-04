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
        darkblue: "#5486EB",
        blue: "#4D81E8",
        lightblue: "#B8D0FF",
        darkgray: "#292929",
        lightgray: "#808080",
        lightgrayplus: "#DEDEDE",
        littlelightgray: "#f5f5f5",
        extralightgray: "#F3F3F3",
        navborder: "#B1B1B1",
        widgetborder: "#88909F",
        projectsborder: "#E9E9E9",
        opacitygray: "rgba(192,192,192,0.8)",
        red: "#FF0000",
        green: "#2BD8B5",

        textbg: "#F8F8F8",
        navtext: "#4F525A",
      },
      height: {
        "90percent": "90%",
        "95percent": "95%",
        "70vh": "70vh",
        "500px": "500px",
        "450px": "450px",
        "400px": "400px",
        "350px": "350px",
        "58percent": "58%",
      },
      width: {
        "70percent": "70%",
        "72percent": "72%",
        "30percent": "30%",
        "65percent": "65%",
        500: "500px",
      },
      minHeight: {
        0: "0",
        14: "56px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "5/6": "83.333%",
        "70vh": "70vh",
        full: "100%",
      },
      margin: {
        260: "260px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
