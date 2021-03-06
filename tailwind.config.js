module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
  }
