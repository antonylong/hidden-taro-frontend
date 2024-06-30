import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: { max: "320px" }, // tiny screen
        sm: { max: "576px" }, // phone
        md: { max: "768px" }, // tablet
        lg: { max: "992px" }, // laptop
        xl: { max: "1200px" }, // desktop
        "2xl": { max: "1536px" }, // humongous
      },
    },
  },
  plugins: [],
};
export default config;
