import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";

/**
 * Shared ESLint base configuration for frontend and backend
 * Contains common rules and ignore patterns
 */
export default [
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/.git/**",
      "**/.happo.js",
      "**/coverage/**",
    ],
  },
  {
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      // General ESLint rules
      "no-console": "off",
      "no-debugger": "warn",
      "no-unused-vars": "off",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-undef": "off",
      "no-use-before-define": "off",
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
      // Prettier (reads from .prettierrc.yml)
      "prettier/prettier": ["error", { usePrettierrc: true }],
    },
  },
];

