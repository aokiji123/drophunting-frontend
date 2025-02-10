import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        smd: "769px",
        xs: "475px",
      },
    },
    fontFamily: {
      chakra: ['"Chakra Petch"', "sans-serif"],
      plex: ['"IBM Plex Mono"', "monospace"],
      sans: ['"IBM PLex Sans", "monospace"'],
      druk: ['"Druk Cyr", "sans-serif"'],
    },
  },
  plugins: [],
} satisfies Config;
