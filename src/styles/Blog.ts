import { minify } from "next/dist/build/swc/generated-native";
import { styled } from "../../stitches.config";

export const BlogContainer = styled('main', {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',
})

export const BlogList = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

})

export const BlogLinkLine = styled('div', {
    padding: '$2 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',

    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '$1',
        width: '100%',
        
        a: {
            width: '100%',
            display: 'flex',
            gap: '$4',
            alignItems: 'center',
            color: '$CodGray950',
            textDecoration: 'none',
    
            '&:hover': {
                strong: {
                    color: '$CodGray700',
                    borderBottom: '1px solid $CodGray700',
                }
            },
    
            strong: {
                with: '100%',
                fontWeight: '$semibold',
                fontSize: '$sm',
                transition: 'border 0.3s ease-in-out',
                borderBottom: '1px solid rgba(0, 0, 0, 0)',

                '@xs': {
                    fontSize: '$md',
                },

                '@lg': {
                    fontSize: '$xl',
                }
            },
            span: {
                minWidth: 'fit-content',
                fontSize: '$xs',
                color: '$CodGray700',

                '@sm': {
                    fontSize: '$sm',
                },

                '@lg': {
                    fontSize: '$md',
                }
            }
        },

        '@sm': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    },


    p: {
        color: '$CodGray700',
        fontWeight: '$light',
    }
})