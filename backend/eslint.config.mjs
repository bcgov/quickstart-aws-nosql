import baseConfig from "../eslint-base.config.mjs";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  ...baseConfig,
  {
    files: ["src/**/*.ts", "test/**/*.ts"],
    ignores: [
      "eslint.config.mjs",
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      globals: {
        ...globals.node,
      },
    },
  },
];
