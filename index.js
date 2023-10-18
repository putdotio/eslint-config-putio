require('@rushstack/eslint-config/patch/modern-module-resolution')

const formatting = require('./formatting')

module.exports = {
  extends: ['react-app', 'react-app/jest', ...formatting.extends],
  overrides: formatting.overrides,
}
