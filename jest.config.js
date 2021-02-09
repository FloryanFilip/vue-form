module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFilesAfterEnv: [
    '<rootDir>/.jest/jest.init.ts'
  ],
}
