module.exports = {
  testEnvironment: "jest-environment-jsdom",
  rootDir: "..",
  testMatch: ["<rootDir>/src/client/**/?(*.)(spec|test).js?(x)"],
  moduleFileExtensions: ["js", "json"],
  moduleDirectories: ["node_modules", "dist"],
  moduleNameMapper: {
    "\\.scss$": require.resolve("./styles-mock.js"),
    "\\.css$": require.resolve("./styles-mock.js"),
    "common(.*)$": "<rootDir>/src/client/common/$1"
  },
  collectCoverageFrom: ["src/client/**/*.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  coverageDirectory: "coverage-client"
};
