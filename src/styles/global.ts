import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$AlbescentWhite100',
    color: '$CodGray900',
    '-webkit-font-smoothing': 'antialiased',
  },
})