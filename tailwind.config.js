module.exports = {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md',
      './resources/**/*.js',
    ],
    important: true,
    theme: {
      extend: {
      },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
  }
