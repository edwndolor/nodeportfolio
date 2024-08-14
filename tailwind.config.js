/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#101820FF",
                secondary: "#FEE715FF",
                tertitary: "#d1990a",
            },
        },
        screens: {
            lg: { max: "2023px" },

            sm: { max: "1000px" },
        },
    },
    plugins: [],
};
