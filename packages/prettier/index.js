/** @type {import('prettier').Config} **/
const config = {
  arrowParens: 'always',
  printWidth: 160,
  singleQuote: true,
  singleAttributePerLine: true,
  trailingComma: 'none',
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      options: {
        tabWidth: 2,
        printWidth: 88
      }
    },
    {
      files: ['*.json'],
      options: {
        printWidth: 200
      }
    }
  ]
}

export default config
