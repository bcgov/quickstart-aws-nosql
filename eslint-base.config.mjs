/**
 * Shared ESLint base configuration for frontend and backend
 * Contains common rules and ignore patterns
 *
 * Note: This config doesn't import packages to avoid module resolution issues
 * when running from subdirectories. Each config (frontend/backend) imports
 * the necessary packages and spreads their recommended rules.
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
    rules: {
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
      // Prettier (reads from .prettierrc.yml)
      "prettier/prettier": ["error", { usePrettierrc: true }],
    },
  },
];

