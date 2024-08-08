module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: { config: './tailwind/tailwind.config.cjs' },
    autoprefixer: {}
  }
}
