import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: ["**/node_modules/**", "dist/**"],
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
