/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...fontFamily.sans],
      serif: ["JetBrains Mono", ...fontFamily.serif],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
