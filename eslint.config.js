import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const recommended = [
  js.configs.recommended,
  unicorn.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
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
      'perfectionist/sort-objects': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  prettier,
];

export const typescript = tseslint.config(
  ...recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    name: 'eslint-config-pyroarsonist/ts-recommended',
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
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
