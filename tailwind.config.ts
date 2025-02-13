import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        beige: 'var(--color-beige)',
        gold: 'var(--color-gold)',
        copper: 'var(--color-copper)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
}

export default config;
