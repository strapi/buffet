module.exports = {
  collectCoverageFrom: ['packages/**/src/**/**/*.js'],
  moduleDirectories: [
    'node_modules',
    '<rootDir>/packages/**/node_modules',
    '<rootDir>/internals',
  ],
  moduleNameMapper: {
    '.*.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>/internals/mocks/image.js',
  },
  rootDir: process.cwd(),

  setupFilesAfterEnv: ['<rootDir>/internals/testing/enzyme-setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: 'tests/.*.test.js$',
  transform: {
    '^.+.js$': 'babel-jest',
    '.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/testing/fileTransformer.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@buffetjs/core|@buffetjs/styles|@buffetjs/custom|@buffetjs/utils|react)/)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/OLD/', '/dist/'],
};
