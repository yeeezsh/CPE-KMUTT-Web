// module mapper hotfix
const tsconfig = require('./tsconfig.jest.json');
const aliasModule = Object.keys(tsconfig.compilerOptions.paths || {})
  .map((alias) => {
    const value = tsconfig.compilerOptions.paths[alias];
    return {
      // alias
      ['^' + alias.replace('*', '(.*)')]:
        // absolute path
        '<rootDir>/' + String(value).replace('*', '') + '$1',
    };
  })
  .reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});

module.exports = {
  // roots: ["src"],
  moduleDirectories: ['./src', 'node_modules'],
  testPathIgnorePatterns: ['<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/common/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    ...aliasModule,
  },

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      babelConfig: true,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
