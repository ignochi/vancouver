/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './public/assets/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-1': "url('../images/bg-image.png')",
        'image-2': "url('../images/feature-bg.png')",
      },
      borderRadius: {
        '9px': '9px',
      },
      keyframes: {
        slide: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-1000px)' },
        }
      },
      animation: {
        slide: 'slide 30s infinite linear',
      },
      textColor: {
        'custom-grey': '#9f9f9f',
      },
      backgroundColor: {
        'custom-dark-grey': '#131416',
      },
    },
  },
  plugins: [],
}

