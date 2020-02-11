module.exports = {
  testEnvironment: "jest-environment-jsdom",
  rootDir: "..",
  testMatch: ["<rootDir>/src/server/**/?(*.)(spec|test).js?(x)"],
  moduleFileExtensions: ["js", "json"],
  moduleDirectories: ["node_modules"],
  collectCoverageFrom: ["src/server/**/*.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "coverage-server"
};
