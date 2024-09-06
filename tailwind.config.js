/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#FFFFFF",
        tertiary: "#13274F",
        "black-100": "#0f1e3d",
        "black-200": "#0a152b",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "-5px 35px 120px -30px #3e617a",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/welderbg.jpeg')",
        "metal-pattern": "url('/src/assets/metalbg.jpg')"
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
  },
  plugins: [],
};


