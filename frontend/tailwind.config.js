/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#0170b9',
        'color-response': '#2c93f4',
      },
      screens: {
        'print': { 'raw': 'print' },
        // => @media  print { ... }
      },
    },
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  }
}