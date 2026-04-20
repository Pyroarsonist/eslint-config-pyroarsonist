import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const importRules = {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. Side effect imports (e.g. import "./style.css")
          ['^\\u0000'],
          // 2. Node.js built-ins and External packages (react, opencv-wasm)
          ['^node:', '^@?\\w'],
          // 3. Absolute/Internal imports (Anything starting with src/ or ~ or @)
          ['^(@|~|src)(/.*|$)'],
          // 4. Relative imports (Anything starting with a dot)
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};

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
      'unicorn/prefer-event-target': 'off',
    },
  },
  prettier,
  importRules,
];

export const typescript = tseslint.config(
  ...tseslint.configs.strictTypeChecked,
  ...recommended,
  {
    name: 'eslint-config-pyroarsonist/ts-recommended',
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  prettier,
  importRules,
);

export default {
  configs: {
    recommended,
    typescript,
  },
};
