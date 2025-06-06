import { ComponentProps, ElementType } from 'react'
import { styled } from "../../stitches.config";

export const Text = styled('p', {
    fontFamily: '$inter',
    fontWeight: '$regular',
    lineHeight: '$tall',
    margin: 0,
    color: '$CodGray900',

    variants: {
        size: {
          xxs: { fontSize: '$xxs' },
          xs: { fontSize: '$xs' },
          sm: { fontSize: '$sm' },
          md: { fontSize: '$md' },
          lg: { fontSize: '$lg' },
          xl: { fontSize: '$xl' },
          '2xl': { fontSize: '$2xl' },
          '4xl': { fontSize: '$4xl' },
          '5xl': { fontSize: '$5xl' },
          '6xl': { fontSize: '$6xl' },
          '7xl': { fontSize: '$7xl' },
          '8xl': { fontSize: '$8xl' },
          '9xl': { fontSize: '$9xl' },
        },
      },
    
      defaultVariants: {
        size: 'md',
      },

})

export interface TextProps extends ComponentProps<typeof Text> {
    as?: ElementType
}