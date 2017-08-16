// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // JavaScript Standard Style 
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // Custom parsers
  // https://github.com/babel/babel-eslint#configuration
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // Specifying Environments 
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true
  },
  // Custom Rules
  rules: {
  }
}
