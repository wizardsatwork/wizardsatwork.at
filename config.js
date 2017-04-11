const path = require('path')

const { transpilers } = require('magic-build')

const year = new Date().getFullYear()

module.exports = {
  TRANSPILERS: {
    HTML: transpilers.PUG,
    CSS: transpilers.STYLUS,
    JS: transpilers.BROWSERIFY,
  },
  year,
}
