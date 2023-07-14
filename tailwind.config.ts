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
        amaranth: ["Amaranth"],
        roboto: ["Roboto Condensed"],
        reem: ["Reem Kufi Fun"],
        noto: ["Noto Nastaliq Urdu"],
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
