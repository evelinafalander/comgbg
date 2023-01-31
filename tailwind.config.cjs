/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        mincursor: "url(svg/rod-hat.svg) 20 20, pointer",
        hovercursor: "url(svg/hat-pek.svg) 20 20, pointer",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
