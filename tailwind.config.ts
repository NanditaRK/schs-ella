import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "ella": "url('/ella-bg-tint-black.png')",
      },
      colors: {
        "main": "#246C94",
      }
 
    },
  },
  plugins: [
    require('daisyui'),
    require("flowbite/plugin"),

  ],
  daisyui: {
    themes: ["light", "dark", "lofi"],
  },
};
export default config;
