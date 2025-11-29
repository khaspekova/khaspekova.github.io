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
        "black-default": "#000000",
        "black-table": "#0a0a0a",
        "white-default": "#ffffff",
        "white-table": "#dbdbdb",
        "gray-active": "#353535",
        "gray-default": "#858383",
        "gray-disable": "#aeaeae",
        "gray-disable-light": "#c3c3c3",
        "gray-feature-bg": "#f3f3f3",
        "orange-active": "#c46901",
        "purple-hover": "#8a38f5",
        "violet-lavender": "#e5e0fd",
        "blue-periwinkle": "#b8c0ff",
        "blue-frost": "#e0e8fd",
        "blue-cornflower": "#9db0dd",
      },
      fontFamily: {
        neue: ["NeueMontreal", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        small: "20px",
        base: "24px",
        large: "32px",
      },
      fontWeight: {
        book: "400",
        medium: "500",
      },
      lineHeight: {
        small: "25px",
        "base-narrow": "25px",
        base: "31px",
        "large-narrow": "31px",
        large: "36px",
      },
      gridTemplateColumns: {
        logo: "2fr 1fr 3fr",
      },
    },
  },
  plugins: [],
};

export default config;
