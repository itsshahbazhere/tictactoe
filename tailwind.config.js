/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather-sans': ['Merriweather Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      colors: {
        'custom-border': 'rgba(255, 255, 255, 0.25)',
        'background-color':'rgba(255, 255, 255, 0.15)',
        'winning-color':'rgba(7,173,61,1)',
      },
    },
  },
  plugins: [],
}

