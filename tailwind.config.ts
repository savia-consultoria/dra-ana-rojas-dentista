import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAF4F8",
          100: "#D2E8EF",
          200: "#A6D2DF",
          300: "#79BBCE",
          400: "#3F95AE",
          500: "#0B6E8E",
          600: "#0A6280",
          700: "#085068",
          800: "#063D4F",
          900: "#042A37",
        },
        accent: {
          50: "#FEF8E6",
          100: "#FCEFC2",
          200: "#F9E08C",
          300: "#F5D260",
          400: "#F2C950",
          500: "#F0C040",
          600: "#D6A724",
          700: "#A8821C",
          800: "#7A5E14",
          900: "#4D3B0C",
        },
        canvas: "#F4F9FC",
        ink: {
          DEFAULT: "#0F2A35",
          soft: "#3D5663",
          muted: "#6B8392",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "serif"],
        sans: ["var(--font-body)", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(11, 110, 142, 0.18)",
        card: "0 8px 24px -8px rgba(11, 110, 142, 0.14)",
        glow: "0 0 0 8px rgba(11, 110, 142, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "soft-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.04)", opacity: "0.92" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-up-delay": "fade-up 0.7s ease-out 0.15s both",
        "fade-up-delay-2": "fade-up 0.7s ease-out 0.3s both",
        "fade-in": "fade-in 0.8s ease-out both",
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top right, rgba(240,192,64,0.18), transparent 55%), radial-gradient(ellipse at bottom left, rgba(11,110,142,0.18), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
