/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                publicSans: ["Public Sans", "sans-serif"],
            },
            colors: {
                white: "hsl(0, 0%, 100%)",
                lightGray: "hsl(0, 0%, 98%)",
                lightGrayBlue: "hsl(220, 16%, 96%)",
                grayBlue: "hsl(233, 8%, 62%)",
                cyan: "hsl(192, 70%, 51%)",
                green: "hsl(136, 65%, 51%)",
                darkBlue: "hsl(233, 26%, 24%)",
            },
            backgroundImage: {
                'introMobile': "url('./src/assets/images/bg-intro-mobile.svg')",
                'introDesktop': "url('./src/assets/images/bg-intro-desktop.svg')",
              }
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [],
};
