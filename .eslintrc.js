module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  ignorePatterns: ['serviceWorker.js', '*.test.js'],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'indent': ['error', 2],
  },
};
