/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        HankenGrotesk: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        lightRedTwo: "hsla(0, 100%, 67%, 0.1)",
        orangeyYellow: "hsl(39, 100%, 56%)",
        orangeyYellowTwo: "hsla(39, 100%, 56%, 0.1)",
        greenTeal: "hsl(166, 100%, 37%)",
        greenTealTwo: "hsla(166, 100%, 37%, 0.1)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        cobaltBlueTwo: "hsla(234, 85%, 45%, 0.1)",
        lightSlateBlue: "hsl(252, 100%, 67%)",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
        paleBLue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",       
      },
    },
  },
  plugins: [],
}

