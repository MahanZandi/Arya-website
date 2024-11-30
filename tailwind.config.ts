import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Zircon : '#F8F9FF' ,
        Alto : '#D8D8D8' ,
        MineShaft : '#2D2D2D' ,
        Observatory : '#009379' ,
        AquaSqueeze : '#E5F4F2' ,
        SweetCorn : '#F8D57E' ,
        MandysPink : '#F2BFAF' ,
        Persimmon : '#FF6250'
      },
      fontSize : {
        Display2XL : '90px' ,
        DisplayXL : '67px' ,
        DisplayL : '50px' ,
        DisplayM : '38px' ,
        DisplayS : '28px' ,
        DisplayXS : '28px' ,
        BodyL : '21px' ,
        BodyM : '16px' ,
        BodyS : '14px' ,
      }
    },
  },
  plugins: [],
} satisfies Config;
