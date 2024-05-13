import js from "@eslint/js";
import ts from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    name: "overrides",
    rules: {
      "no-undef": "warn"
    }
  },
  {
    name: "global-ignores",
    ignores: ["**/dist/"]
  }
];