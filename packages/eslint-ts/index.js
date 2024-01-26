module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/require-default-prop': 'warn',
    'vue/no-reserved-component-names': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error'],
    'no-octal-escape': 'error',
    'no-unused-vars': 'off',
    'no-undef': 'off'
  }
}
