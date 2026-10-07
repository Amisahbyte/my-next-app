// const nextJest = require("next/jest")();

// const createJestConfig = nextJest;

// const customJestConfig = {
//   testEnvironment: "node",
// };

// module.exports = createJestConfig(customJestConfig);

const nextJest = require("next/jest")();

const createJestConfig = nextJest;

const customJestConfig = {
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

module.exports = createJestConfig(customJestConfig);