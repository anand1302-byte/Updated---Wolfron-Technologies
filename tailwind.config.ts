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
        primary: {
          DEFAULT: "#B00B1D",
          dark: "#8A0916",
          light: "#D32F3E",
        },
        secondary: {
          DEFAULT: "#121212",
          light: "#1E1E1E",
        },
        accent: {
          DEFAULT: "#F2F2F2",
          dark: "#E0E0E0",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

