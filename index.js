module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',

    'import/no-cycle': 1,

    'no-use-before-define': 0,
    'no-return-assign': 1,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-unused-vars': 1,
    'consistent-return': 0,
    'no-restricted-syntax': 1,
    'max-classes-per-file': 1,
    'operator-assignment': 1,

    'jsx-a11y/accessible-emoji': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/label-has-for': 1,

    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/forbid-prop-types': 0,
    'react/default-props-match-prop-types': 1,
    'react/no-unused-state': 1,
    'react/jsx-curly-brace-presence': 1,
    'react/destructuring-assignment': 0,

    'react/jsx-props-no-spreading': 1,
    'react/state-in-constructor': 1,
    'react/no-deprecated': 1,
    'react/static-property-placement': 1,

    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
  },
}
