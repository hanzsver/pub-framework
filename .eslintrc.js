module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  globals: {
    inavi: true,
    google: true,
    $: true,
    config: true,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 0,
    'vue/no-unused-components': 'warn',
    'vue/attribute-hyphenation': [
      'warn',
      'always',
      {
        ignore: [],
      },
    ],
  },
  settings: {
    'import/core-modules': ['windi.css'],
  },
};
