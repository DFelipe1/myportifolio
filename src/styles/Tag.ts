import { styled } from "../../stitches.config";

export const Tag = styled('span', {
    width: 'fit-content',
    height: 'fit-content',
    fontFamily: '$jetbrains_mono',
    fontSize: '$md',
    fontWeight: '$semibold',
    lineHeight: '$short',
    letterSpacing: '4%',
    
    variants: {
        background: {
            true: {
                fontSize: '$sm',
                backgroundColor: '$CodGray700',
                padding: '$1 $2',
                borderRadius: '$full',
                color: '$AlbescentWhite100',
            },
            false: {
                backgroundColor: 'transparent',
            }
        }
    },

    defaultVariants: {
    background: 'false',

  }
})