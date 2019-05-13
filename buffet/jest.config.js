module.exports = {
  collectCoverageFrom: [
    'src/**/**/*.{js,jsx}',
    '!src/**/**/*.test.{js,jsx}',
    '!src/**/index.{js,jsx}',
    '!src/index.js',
    '!src/utils/*.{js,jsx}', // This should be tested
    '!src/assets/**/*.{js,jsx}',
    '!src/styled/GlobalStyle/*.{js,jsx}',
    '!src/commonPropTypes/**/*.{js,jsx}',
    '!src/**/stories/*.{js,jsx}',
    '!dist/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: ['<rootDir>/internals/testing/test-bundler.js'],
  setupFiles: ['raf/polyfill', '<rootDir>/internals/testing/enzyme-setup.js'],
  testRegex: 'tests/.*\\.test\\.js$',
};
