/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        laila: ["Laila", "sans-serif"],
        "be-vietnam": ["Be Vietnam", "sans-serif"],
      },
      colors: {
        primary: "#004DA1",
        secondary: "#21b6ff",
        secondaryLight: "#e7f8ff",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, #004DA1, #0E3E72)",
        "btn-gradient":
          "linear-gradient(204.44deg, #004DA1 59.09%, #0E3E72 90.72%)",
      },
    },
  },
  plugins: [],
};
