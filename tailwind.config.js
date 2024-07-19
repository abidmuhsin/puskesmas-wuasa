/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dashboard': "url('src/assets/dashboard.jpeg')"
      },
    },
  },
  plugins: [],
}