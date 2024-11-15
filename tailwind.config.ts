import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: ["saol", "Times Georgia", "serif"],
        body: ["Trebuchet", "sans-serif"],
      },
      gridTemplateRows: {
        "10": "repeat(10, minmax(0, 1fr))",
      },
    },
    keyframes: {
      highlight: {
        "0%": {
          width: "0%",
        },
        "100%": {
          width: "100%",
        },
      },
      wave: {
        "0%, 100%": {
          transform: "translateY(0px)",
        },
        "50%": {
          transform: "translateY(-5px)",
        },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      highlight: "highlight 0.4s ease-in-out forwards",
      wave: "wave 2s ease-in-out infinite",
      spin: "spin 1s linear infinite",
    },
    screens: {
      mobile: "450px",
      tablet: "768px",
      desktop: "1024px",
    },
  },
  plugins: [],
};
export default config;
