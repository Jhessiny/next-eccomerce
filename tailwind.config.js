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
      colors: {
        primary: {
          main: "rgb(24, 109, 134)",
          dark: "rgb(16, 73, 90)",
        },
      },
    },
  },
  plugins: [],
};
