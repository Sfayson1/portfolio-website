/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  './public/index.html'
];
export const theme = {
  extend: {
    colors: {
      primary: {
        red: '#fe6559', 
        pink: '#f1aabd', 
        yellow: '#fde640', 
        orange: '#fd8f52', 
        darkRed: '#cc382a',
      },
      text: {
        lightMode: '#333333',
        darkMode: '#F5F5F5',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      'crimson-text': ['Crimson Text', 'serif'],
    },
  },
  plugins: [],
};
