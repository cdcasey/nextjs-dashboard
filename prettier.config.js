const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  useTabs: true,
  tabWidth: 2,
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
