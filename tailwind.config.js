/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {},
            colors: {},
        },
        fluidTypography: {},
    },
    // eslint-disable-next-line no-undef
    plugins: [require("tailwind-fluid-typography")],
};
