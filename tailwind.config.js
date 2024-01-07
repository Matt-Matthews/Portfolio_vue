/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg_image': "url('/src/assets/bg_image.jpg')",
      }
    },
  },
  plugins: [],
}
