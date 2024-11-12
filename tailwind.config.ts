import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Inclure le dossier [locale]
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        andalemo: ['var(--font-andalemo)'],
        chakrapetch: ['var(--font-chakrapetch)'],
        krungthep: ['var(--font-krungthep)'],
      },
    },
  },
  plugins: [],
};
export default config;
