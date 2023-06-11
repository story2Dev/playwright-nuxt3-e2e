import path from "path";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    // "e2e/*"  is used as a folder for E2E testing, so exclude it from the test target
    exclude: [...configDefaults.exclude, "./tests/e2e/*"],
    // If you need path resolution in your test file's import statement, fix it here
    alias: {
      "~~": path.resolve(__dirname),
    },
  },
});