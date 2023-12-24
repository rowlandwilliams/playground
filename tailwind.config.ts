import type { Config } from "tailwindcss";
import { safeList } from "./tailwind/safeList";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [...safeList],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "chart-gray": "#1D2025",
        "header-gray": "#2A2D36",
        "header-purple": "#512FFF",
        "dark-gray": "#0E0E0E",
        "chart-purple": "#C479FF",
        "chart-red": "#FF6868",
        "chart-yellow": "#FFFA7A",
        "chart-grid-grey": "#9F9F9F",
        "light-gray": "#f0f5fc",
      },
    },
  },
  plugins: [],
};
export default config;
