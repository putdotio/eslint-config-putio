require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier',
    'plugin:perfectionist/recommended-natural',
  ],
};
