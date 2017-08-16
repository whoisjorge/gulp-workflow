// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // Specifying Environments 
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true
  },
  // JavaScript Standard Style 
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // Custom Rules
  rules: {
  }
}
