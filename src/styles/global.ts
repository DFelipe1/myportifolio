import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    outline: 0,
  },

  body: {
    backgroundColor: '$AlbescentWhite100',
    color: '$CodGray900',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: '$inter'
  },

  a: {
    textDecoration: 'none',
    color: '$CodGray900',
    fontSize: '$md',
    lineHeight: '$base',
  }
})