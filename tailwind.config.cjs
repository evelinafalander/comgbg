/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        mincursor: "url(svg/hat-brun.svg) 20 20, pointer",
        hovercursor: "url(svg/hat-hover.svg) 20 20, pointer",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
