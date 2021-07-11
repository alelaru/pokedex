module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      green: "rgba(5, 150, 105)",
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
        progress: "rgba(209, 213, 219)",
      },
      red: {
        primary: "#ed4956",
      },
      type: {
        grass: "#92bf19",
        poison: "#be78be",
        fire: "#ff3700",
        flying: "#79bcd7",
        water: "#0093e4",
        dragon: "#3c64c8",
        bug: "#32b332",
        normal: "#9f9f9f",
        ability: "#616161",
        dark: "#646464",
        electric: "#e3b600",
        psychic: "#db78c7",
        ground: "#cba042",
        steel: "#95b3db",
        ice: "#00b6ed",
        fairy: "#fe7eb7",
        fighting: "#c75500",
        rock: "#9f7850",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
