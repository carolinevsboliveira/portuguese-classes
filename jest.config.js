/* eslint-disable-next-line*/
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', './next'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts(x)']
}

module.exports = createJestConfig(customJestConfig)
