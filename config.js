const path = require('path')

const HTML = require('@mspg/transpile-pug')
const CSS = require('@mspg/transpile-stylus')
// const JS = require('@mspg/transpile-babel')

const year = new Date().getFullYear()

module.exports = {
  TRANSPILERS: {
    HTML,
    CSS,
    // JS,
  },
  year,
  IGNORE_EXTENSIONS: ['ai', 'psd', 'xcf'],
  WEB_ROOT: 'https://wizardsatwork.github.io/wizardsatwork.at/',
}
