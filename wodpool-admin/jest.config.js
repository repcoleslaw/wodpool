module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest.preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$':
      '<rootDir>/__mocks__/file-mock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: [
    'node_modules',
    '\\.cache',
    '<rootDir>.*/public',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  globals: {
    __PATH_PREFIX__: '',
  },
};
