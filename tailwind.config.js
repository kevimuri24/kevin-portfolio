/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {

        '4xl': '16rem',
        '8xl': '32rem',
        '16xl': '64rem',
        '32xl': '128rem',

      },
      
    },
  },
  plugins: [],
}

