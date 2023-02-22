/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      "pink-main": "#D20653",
      "pink-light": "#FBE7EE ",
      "pink-dark": "#9B0257",
      white: "#ffffff",
      yellow: "#FFF9E6",
      gold: "#FDB605",
      "gold-dark": "#FF961C",
      black: "#222222",
      purble: "#44215D",
      "purble-light": "#EAE7ED",
      gray: "#B3B3B3",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
