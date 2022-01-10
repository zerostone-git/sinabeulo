module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['svelte3', '@typescript-eslint'],
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'svelte',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svelte'],
      },
    },
    'svelte3/typescript': true,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        '../../.eslintrc.js',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        '../../.eslintrc.js',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
    {
      files: ['*.svelte'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        '../../.eslintrc.js',
      ],
      processor: 'svelte3/svelte3',
      rules: {
        'no-multiple-empty-lines': 'off',
        'no-undef-init': 'off',
        'import/first': 'off',
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
