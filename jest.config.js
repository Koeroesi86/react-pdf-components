const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig")

module.exports = {
  rootDir: "src",
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  cacheDirectory: path.resolve(__dirname, ".cache/jest/"),
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' }),
};
