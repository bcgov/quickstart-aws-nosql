import baseConfig from "../eslint-base.config.mjs";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  ...baseConfig,
  {
    // Define plugins globally so baseConfig rules can use them
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
    },
  },
  {
    // Lint both source and test TypeScript files
    files: ["src/**/*.ts", "test/**/*.ts"],
    ignores: ["eslint.config.mjs"],
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
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
    },
  },
];
