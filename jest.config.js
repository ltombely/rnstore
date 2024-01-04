module.exports = {
  preset: 'react-native',
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['jest-styled-components'],
  transform: {
    '^.+\\.(js|jsx)$': require.resolve('babel-jest'),
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transformIgnorePatterns: ['/Header.styles.ts/']
};
