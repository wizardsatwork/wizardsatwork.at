const tags = `html,
h1, h2, h3,
div, p, span,
img,
ul,
li,
.article,
.section,
.header,
.footer,
.main`

const blocks = `.article,
.header,
.footer,
.section`

module.exports = {
  [tags]: {
    background: 'transparent',
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 400,
    margin: 0,
    outline: 0,
    padding: 0,
    verticalAlign: 'baseline',
  },

  [blocks]: {
    display: 'block',
  },

  a: {
    background: 'transparent',
    fontSize: '100%',
    margin: 0,
    padding: 0,
    verticalAlign: 'baseline',
  },
  ul: {
    listStyle: 'none',
  },
  '*': {
    boxSizing: 'border-box',
  },

  '#Magic': {
    margin: '1em auto 0',
    width: '90%',
  },

  '.Page': {
    header: {
      margin: '0 0 .5em',
    },

    h1: {
      margin: '1em 0 .2em',
    },
  },

  // html header tags
  'h1, h2, h3, h4, h5': {
    margin: '1em 0 .2em',
  },
  h1: {
    fontSize: '1.3em',
  },
  h2: {
    fontSize: '1.2em',
  },
  h3: {
    fontSize: '1.1em',
  },
}
