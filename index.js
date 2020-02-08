module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],

  plugins: ['prettier', 'react-hooks'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },

  rules: {
    'prettier/prettier': 'error',

    camelcase: 'off',

    'no-use-before-define': 'off',
    'no-return-assign': 'warn',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'warn',

    'consistent-return': 'off',
    'max-classes-per-file': 'warn',
    'operator-assignment': 'warn',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
        prefixWithI: 'always',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],

    'import/no-cycle': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'tests/**',
          '**/*.stories.jsx',
          '**/*.stories.tsx',
          '**/*.spec.js',
          '**/*.spec.ts',
          '**/*.spec.jsx',
          '**/*.spec.tsx',
        ],
      },
    ],

    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/label-has-for': 'warn',

    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],

    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/forbid-prop-types': 'off',
    'react/default-props-match-prop-types': 'warn',
    'react/no-unused-state': 'warn',

    'react/destructuring-assignment': 'off',

    'react/state-in-constructor': 'warn',
    'react/no-deprecated': 'warn',
    'react/static-property-placement': 'warn',

    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',

    'no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
