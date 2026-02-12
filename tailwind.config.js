/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 0 0 1px rgba(148,163,184,0.15) inset, 0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
