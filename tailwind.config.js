/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    margin: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
      "2xl": "80px",
      auto: "0 auto",
    },
  },
  plugins: [],
};
