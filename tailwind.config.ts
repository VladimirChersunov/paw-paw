import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
      'not-supported': {'min': '0px', 'max': '279px'},
      'sm': {'min': '280px', 'max': '1016px'},
      'md': {'min': '1016px', 'max': '1320px'},
      'lg': {'min': '1059px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},     
      '2xl': {'min': '1536px'},        
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
          error: "var(--color-text-error)",
          link: "var(--color-text-link)"
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",         
          "fill-message": "var(--color-fill-message)",
          "fill-inverted": "var(--color-fill-inverted)",
          "button-accent": "var( --color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
          "button-inverted-hover": "var(--color-button-inverted-hover)",
          "button-inverted": "var(--color-button-inverted)",          
        },
      },
      borderColor: {
        skin: {
          "base": "var(--color-border-base)",
          "inverted": "var(--color-border-inverted)",
          "error": "var(--color-border-error)",
        },
      },
      stroke:{
        skin:{
          "base":"var( --color-stroke-base)",
          "inverted":"var( --color-stroke-inverted)"
        },
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
