import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/.git/**",
      "**/.next/**",
      "**/.happo.js",
      "eslint.config.mjs",
    ],
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: [ "./tsconfig.eslint.json" ],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      "no-console": "off",
      "no-debugger": "warn",
      "no-unused-vars": "off",
      "no-empty": [ "error", { allowEmptyCatch: true } ],
      "no-undef": "off",
      "no-use-before-define": "off",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: [ "default" ],
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
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [ "error", { argsIgnorePattern: "^_" } ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-use-before-define": [ "error", { functions: false } ],
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": [ "error", { prefer: "type-imports" } ],
      // Prettier
      "prettier/prettier": [ "error", { endOfLine: "auto" } ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
