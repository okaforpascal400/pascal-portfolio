import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#111111",
        "surface-elevated": "#161616",
        border: "#1f1f1f",
        "border-hover": "#2a2a2a",
        amber: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          glow: "rgba(245, 158, 11, 0.15)",
        },
        text: {
          primary: "#f5f5f5",
          secondary: "#a3a3a3",
          muted: "#525252",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "extra-wide": "0.2em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "grid-fade": "grid-fade 8s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.1" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(245, 158, 11, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.07) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "amber-glow": "0 0 30px rgba(245, 158, 11, 0.15)",
        "amber-glow-lg": "0 0 60px rgba(245, 158, 11, 0.25)",
        "card-hover":
          "0 0 0 1px rgba(245, 158, 11, 0.4), 0 8px 30px rgba(245, 158, 11, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
