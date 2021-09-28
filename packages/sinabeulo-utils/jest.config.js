module.exports = {
  verbose: true,
  roots: ['<rootDir>/src/'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/?(*.)+(spec).+(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
    '^.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
