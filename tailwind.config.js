/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'Orange':'#fb7413',
      'White' : '#ffffff',
      'Light-Grey': '#959eac',
      'Medium-Grey': '#7c8798',
      'Dark-Blue': '#252d37',
      'Very-Dark-Blue': '#121417',
    },
    fontSize: {
      'Paragraph': '15px',
      'Heading': '30px',
    },
    extend: {},
  },
  plugins: [],
}
