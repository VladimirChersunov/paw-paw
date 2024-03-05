import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fill: {
        "colorsvg": "var(--color-fill-svg)",
      },
      textColor: {
        "placeholder-color": "var(--color-text-base)",
      },
      borderColor: {
        "border-secondary": "var(--color-border-base)",
      },
      backgroundColor: {
        fill: {
          "background-paw-pals": "rgba(201, 255, 255, 1)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
