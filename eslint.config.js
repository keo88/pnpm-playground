import js from '@eslint/js';
import ts from 'typescript-eslint';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    name: 'config-overrides',
    files: ['**/*.config.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    name: 'overrides',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-undef': 'warn',
    },
  },
  {
    name: 'global-ignores',
    ignores: ['**/dist/', '**/.next/'],
  },
];
