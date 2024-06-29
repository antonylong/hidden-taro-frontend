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
        xs: { max: "320px" },
        sm: { max: "576px" },
        md: { max: "768px" },
        lg: { max: "992px" },
        xl: { max: "1200px" },
        "2xl": { max: "1536px" },
      },
    },
  },
  plugins: [],
};
export default config;
