/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0d17',
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'default-img': "url('/assets/home/background-home-desktop.jpg')",

        medium: "url('/assets/home/background-home-tablet.jpg')",
        mobile: "url('/assets/home/background-home-mobile.jpg')",
        destination:
          "url('/assets/destination/background-destination-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
