const rootConf = require('../../tools-configuration/jest.config.js');

module.exports = Object.assign({}, rootConf, {
  moduleNameMapper: {
    ...rootConf.moduleNameMapper,
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/OLD/',
    '/dist/',
    '<rootDir>/build/',
  ],
  setupFilesAfterEnv: ['./test-bundler.js'],
});
