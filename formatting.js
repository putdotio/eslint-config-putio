require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  extends: ['plugin:perfectionist/recommended-natural'],
  plugins: ['prettier', 'json-files'],
  overrides: [
    {
      files: ['*.jsx', '*.js', '*.ts', '*.tsx', '*.json'],
    },
  ],
  rules: {
    'json-files/eol-last': 'error',
    'json-files/sort-package-json': 'error',
    'prettier/prettier': 'error',
  },
}
