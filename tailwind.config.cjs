/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        mincursor: "url(svg/ny-hatt-4.svg) 20 20, pointer",
        hovercursor: "url(svg/ny-4hov.svg) 20 20, pointer",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
