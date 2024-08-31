import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Add this line for Flowbite
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141D27", // Dark Blue
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
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin(), // Add this line for Flowbite plugins
  ],
};
export default config;
