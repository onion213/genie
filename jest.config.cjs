module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: ["tests/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/src/(.*)$": "<rootDir>/src/$1",
  },
};
