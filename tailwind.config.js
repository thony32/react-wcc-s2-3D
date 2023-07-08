/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          ".text-nav": {
            "color" : "#ffffff",
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          ".text-nav": {
            "color" : "#ffffff",
          },
        },
        valentine: {
          ...require("daisyui/src/theming/themes")["[data-theme=valentine]"],
          ".text-nav": {
            "color" : "#ffffff",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
