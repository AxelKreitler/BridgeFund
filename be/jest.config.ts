import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [`${baseDir}/**/__tests__/*.ts`],
};

export default config;
