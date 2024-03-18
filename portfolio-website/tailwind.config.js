/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          brightBlue: '#3AAED8',
          lightTurquoise: '#7CFEF0',
          mintGreen: '#D7F9F1',
          deepGreen: '#618B4A',
          vibrantGreen: '#28965A',
          sageGreen: '#629460',
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
  },
};
