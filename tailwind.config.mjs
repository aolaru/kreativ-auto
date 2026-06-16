/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f1720",
        steel: "#334155",
        sand: "#eef2f7",
        accent: "#c2410c",
        signal: "#0f766e",
        chrome: "#e2e8f0"
      },
      boxShadow: {
        panel: "0 18px 40px rgba(15, 23, 32, 0.08)"
      }
    }
  },
  plugins: []
};
