/** @type {import('prettier').Config} **/
const config = {
  arrowParens: 'always',
  printWidth: 160,
  singleQuote: true,
  singleAttributePerLine: false,
  trailingComma: 'none',
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  vueIndentScriptAndStyle: true,
  importOrder: ["^components/(.*)$", "^[./]" ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true ,
  plugins: [
    "@trivago/prettier-plugin-sort-imports"
  ],
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
