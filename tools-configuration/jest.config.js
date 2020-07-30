module.exports = {
  cacheDirectory: '<rootDir>/jest/tmp',
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>../../tools-configuration/mocks/styleMock.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>../../tools-configuration/mocks/image.js',
    '@buffetjs/core': '<rootDir>../../packages/buffetjs-core/src/index',
    '@buffetjs/icons': '<rootDir>../../packages/buffetjs-icons/src/index',
    '@buffetjs/hooks': '<rootDir>../../packages/buffetjs-hooks/src/index',
    '@buffetjs/styles': '<rootDir>../../packages/buffetjs-styles/src/index',
    '@buffetjs/utils': '<rootDir>../../packages/buffetjs-utils/src/index',
  },
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>../../tools-configuration/test-bundler.js'],
};
