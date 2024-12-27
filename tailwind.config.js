/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      "background-gradient":
          "background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite",
        blink: "blink 2s infinite",
    },
    extend: {},
    keyframes: {
      "background-gradient": {
        "0%, 100%": {
          transform: "translate(0, 0)",
          animationDelay: "var(--background-gradient-delay, 0s)",
        },
        "20%": {
          transform:
            "translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)))",
        },
        "40%": {
          transform:
            "translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)))",
        },
        "60%": {
          transform:
            "translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)))",
        },
        "80%": {
          transform:
            "translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)))",
        },
      },
      blink: {
        "0%, 100%": {
          opacity: "1",
        },
        "50%": {
          opacity: "0.5",
        },
      },
    }
  },
  plugins: [],
}