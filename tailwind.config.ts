import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["autumn"],
  },
  theme: {
    extend: {
      fontFamily: {
        courgette: ["Courgette"],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
