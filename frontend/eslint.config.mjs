import baseConfig from "../eslint-base.config.mjs";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  ...baseConfig,
  {
    ignores: [
      "**/.next/**",
      "eslint.config.mjs",
      "routeTree.gen.ts",
      "**/dist/**",
      "**/node_modules/**",
      "**/coverage/**",
      "**/e2e/**",
    ],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: ["./tsconfig.eslint.json"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Base recommended rules
      ...tseslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      // Frontend-specific rules
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"],
              message: "Please import from 'react/jsx-runtime' instead.",
            },
          ],
        },
      ],
      // React rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
