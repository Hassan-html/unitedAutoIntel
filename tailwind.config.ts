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
        primary: {
          light: "#449FF4FF",
          DEFAULT: "#023E8DFF",
          dark: "#021736FF",
        },
        secondary: {
          light: "#F5A623",
          DEFAULT: "#F2994A",
          dark: "#D97706",
        },
        accent: {
          light: "#22D3EE",
          DEFAULT: "#06B6D4",
          dark: "#0891B2",
        },
        background: "#F9FAFB",
        cardBg: "#FFFFFF",
        cardBorder: "#E5E7EB",
        textPrimary: "#1F2937",
        textSecondary: "#4B5563",
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.1)",
        button: "0 6px 12px rgba(0, 0, 0, 0.15)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin(), // Add this line for Flowbite plugins
  ],
};
export default config;
