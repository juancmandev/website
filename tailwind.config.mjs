/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#eee",
        input: "#00adb5",
        ring: "#00adb5",
        background: "#222831",
        foreground: "#eee",
        primary: {
          DEFAULT: "#00adb5",
          foreground: "#000",
        },
        secondary: {
          DEFAULT: "#393e46",
          foreground: "#eee",
        },
        destructive: {
          DEFAULT: "#ff2e63",
          foreground: "#eee",
        },
        muted: {
          DEFAULT: "#393e46",
          foreground: "#eee",
        },
        accent: {
          DEFAULT: "#00adb5",
          foreground: "#eee",
        },
        popover: {
          DEFAULT: "#393e46",
          foreground: "#eee",
        },
        card: {
          DEFAULT: "#393e46",
          foreground: "#eee",
        },
      },
      borderRadius: {
        lg: "8px",
        md: "4px",
        sm: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
