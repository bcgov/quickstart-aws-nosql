import baseConfig from "./eslint-base.config.mjs";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

/**
 * Root-level ESLint configuration
 * Uses shared base config and applies root-specific settings
 */
export default [
  ...baseConfig,
  {
    ignores: [
      "**/.github/",
      "**/migrations/",
      "**/infra/**",
      "**/terragrunt/**",
      "**/tests/**",
      "frontend/**",
      "backend/**",
    ],
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Root-specific overrides can go here if needed
    },
  },
];
