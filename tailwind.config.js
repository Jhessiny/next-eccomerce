/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/presentation/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        128: "32rem",
        256: "64rem",
        384: "96rem",
      },
      width: {
        128: "32rem",
        256: "64rem",
        384: "96rem",
      },
    },
  },
  plugins: [],
};
