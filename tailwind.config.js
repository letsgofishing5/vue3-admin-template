/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      'xs': { 'min': '0px', 'max': '599px' },
      'sm': { 'min': '600px', 'max': '1023px' },
      'md': { 'min': '1024px', 'max': '1439px' },
      'lg': { 'min': '1440px', 'max': '1919px' },
      'xl': { 'min': '1920px' },
    },
  },
  plugins: [],
}

