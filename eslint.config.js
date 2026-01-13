import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const recommended = [
  js.configs.recommended,
  unicorn.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    name: 'eslint-config-pyroarsonist/js-recommended',
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'multi-line'],
      'import/no-dynamic-require': 'off',
      'import/prefer-default-export': 'off',
      'no-await-in-loop': 'off',
      'no-console': ['error', { allow: ['info', 'error', 'warn', 'trace', 'table'] }],
      'no-continue': 'off',
      'no-plusplus': 'off',
      'no-underscore-dangle': 'off',
      'unicorn/no-anonymous-default-export': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/no-process-exit': 'off',
      'unicorn/no-null': 'off',
      'object-shorthand': 'error',
      'unicorn/filename-case': 'off',
    },
  },
  prettier,
];

export const typescript = tseslint.config(
  ...tseslint.configs.strictTypeChecked,
  ...recommended,
  {
    name: 'eslint-config-pyroarsonist/ts-recommended',
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
  prettier,
);

export default {
  configs: {
    recommended,
    typescript,
  },
};
