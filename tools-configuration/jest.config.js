module.exports = {
  cacheDirectory: '<rootDir>/jest/tmp',
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>../../tools-configuration/mocks/styleMock.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>../../tools-configuration/mocks/image.js',
    '@buffet-js(.*)': '<rootDir>..$1',
  },
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>../../tools-configuration/test-bundler.js'],
};
