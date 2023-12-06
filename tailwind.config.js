/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        special: "#252128",
      },
    },
    screens: {
      sm: "100px",
      md: "700px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-black": {
          WebkitTextStroke: "0.05px black",
          textStroke: "0.05px black",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
