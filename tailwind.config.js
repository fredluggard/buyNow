/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sideBanner: "#FFFFFF",
        mainBanner: "#E5EFEA",
        hangingBanner: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
