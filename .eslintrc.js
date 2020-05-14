module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2020: true
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
    'plugin:react/recommended'
  ],
  rules: {
    'camelcase': 'off',
    '@typescript-eslint/camelcase': 'off'
  }
}