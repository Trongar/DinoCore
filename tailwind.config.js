/** @type {import('tailwindcss').Config} */

/* eslint-disable global-require */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
      // https://vercel.com/design/color
      colors: {
        "gray-1000": "#0D0D0D",
        "gray-1001": "#161616",
        "gray-1002": "#212121",
        gray: {
          ...colors.zinc,
          one: "#a5a5a5",
        },
        brand: {
          main: "#fdffa8",
        },
      },
      fontFamily: {
        sans: "var(--font-inter)",
        archivo: "var(--font-archivo)",
      },
      backgroundImage: ({ theme }) => ({
        "vc-border-gradient": `radial-gradient(at left top, ${theme(
          "colors.gray.500",
        )}, 50px, ${theme("colors.gray.800")} 50%)`,
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            "border-color": theme("colors.vercel.pink"),
          },
          "40%": {
            "border-color": theme("colors.vercel.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: 1,
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      }),
    },
  },
  plugins: [],
}
