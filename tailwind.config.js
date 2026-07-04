/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#F5F0E8',
        olive: '#6B7C4A',
        matcha: '#8BAF5A',
        brown: '#3B2F2F',
        cream: '#FAF7F2',
        charcoal: '#1C1C1C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        blob: '60% 40% 55% 45% / 50% 55% 45% 50%',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
