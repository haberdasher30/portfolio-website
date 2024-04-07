const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteColor: "var(--white-color)",
        greenColor: "var(--green-color)",
        grayColor: "var(--gray-color)",
        redColor: "var(--red-color)",
        backgroundRoot: "var(--background-root)",
        backgroundNavbar: "var(--background-navbar)",
        backgroundContainer: "var(--background-container)",
        backgroundRed: "var(--background-red)",
        backgroundRedHover: "var(--background-red-hover)",
        borderColor: "var(--border-color)",
      },
      animation: {
        typewriter: "typewriter 3s steps(22) infinite alternate",
        caret:
          "typewriter 3s steps(22) infinite alternate, blink 1s steps(22) infinite 3s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});
