import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'inset-pixelated': 'inset 2px 2px 0 0 #919191',
        'inset-pixelated-alt': 'inset 2px 2px 0 0 rgba(255,255,255,0.35)',
      },
      fontFamily: {
        'sans': ['"Pixelated MS Sans Serif"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;