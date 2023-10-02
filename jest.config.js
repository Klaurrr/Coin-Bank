const nextJest = require("next/jest.js");
const path = require("path");

const createJestConfig = nextJest({
      dir: "./",
});
/** @type {import('jest').Config} */
const config = {
      testEnvironment: "jest-environment-jsdom",
      setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
      // moduleNameMapper: {
      //       "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
      // },
};
module.exports = createJestConfig(config);
