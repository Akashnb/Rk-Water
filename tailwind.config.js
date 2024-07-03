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
                customBlue: "rgba(0, 77, 161, 1)",
                "custom-blue-start": "rgba(0, 77, 161, 1)",
                "custom-blue-end": "rgba(14, 62, 114, 1)",
                "custom-bg": "rgba(231, 248, 255, 1)",
            },
            backgroundImage: {
                "gradient-custom":
                    "linear-gradient(to right, rgba(0, 77, 161, 1), rgba(14, 62, 114, 1))",
                "btn-gradient":
                    "linear-gradient(204.44deg, #004DA1 59.09%, #0E3E72 90.72%)",
            },
            height: {
                70: "",
            },
        },
    },
    plugins: [],
};
