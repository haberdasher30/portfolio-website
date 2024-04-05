const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
