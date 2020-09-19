module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],

  plugins: ['import', 'prettier', 'react-hooks'],

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

    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  rules: {
    'prettier/prettier': 'error',

    camelcase: 'off',
    'consistent-return': 'off',
    'max-classes-per-file': 'warn',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'warn',
    'no-return-assign': 'warn',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'operator-assignment': 'warn',

    '@typescript-eslint/missing-boundary-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
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
          delimiter: 'semi',
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

    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',

    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],

    'react/default-props-match-prop-types': 'warn',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-deprecated': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/state-in-constructor': 'warn',
    'react/static-property-placement': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
