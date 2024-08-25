import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E2A39", // Dark Blue
        secondary: "#6C757D", // Gray
        accent: "#021B4B", // Bright Red
        background: "#F7F7F7", // Light Gray
        highlight: "#FF0000", // Bright Orange
        teal: "#008080", // Teal
        textDark: "#343A40", // Dark Gray for text
        textLight: "#FFFFFF", // White for text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
