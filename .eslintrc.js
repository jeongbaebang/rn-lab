// eslint-config-prettier는 Prettier와 충돌하는 ESLint 규칙을 비활성화하는 역할
// eslint-plugin-prettier는 Prettier의 규칙을 ESLint의 규칙으로 실행시켜 주는 역할

module.exports = {
  root: true,

  ignorePatterns: ['jest.*.js', 'coverage', '.detoxrc.js'],
  plugins: ['prettier', 'react', 'react-native', 'react-hooks'],
  extends: [
    '@react-native',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'func-style': ['error', 'expression'], // 표현식
  },
};
