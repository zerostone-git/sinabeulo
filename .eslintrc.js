module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'WithStatement'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },
};
