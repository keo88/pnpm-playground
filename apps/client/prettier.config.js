import defaultConfig from '../../prettier.config.js';

const config = {
  ...defaultConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
