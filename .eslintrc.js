module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['next-config.js'],
      plugins: [
        '@typescript-eslint',
        'prettier',
        'jam3',
        'react',
        'react-hooks',
        'flowtype',
        'import',
        'jsx-a11y',
        'no-only-tests',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'react-app',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'jam3/no-sanitizer-with-danger': [
          2,
          {
            wrapperName: ['sanitize'],
          },
        ],
        'react/react-in-jsx-scope': ['off'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-debugger': ['error'],
        'no-console': ['error'],
        curly: ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-only-tests/no-only-tests': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
}