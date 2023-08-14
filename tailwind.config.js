/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Helvectica':['Helvetica', 'Arial', 'sans-serif'],
        'BiennaleBold' : ['BiennaleBold'],
        'BiennaleHeavy' : ['BiennaleHeavy'],
        'BiennaleSemiBoldItalic' : ['BiennaleSemiBoldItalic'],
        'BiennaleMedium' : ['BiennaleMedium'],
        'BiennaleBook' : ['BiennaleBook'],
        'BiennaleBlack' : ['BiennaleBlack'],
        'BiennaleRegular' : ['BiennaleRegular'],
      }
    },
  },
  plugins: [],
}

