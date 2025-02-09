/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  useTabs: false,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/tailwind.css',
}
