import { styled } from "../../../stitches.config";

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
        gap: '$1',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        a: {
            display: 'flex',
            gap: '$4',
            alignItems: 'center',
            color: '$CodGray950',
            textDecoration: 'none',
          
            width: 'fit-content',
    
            '&:hover': {
                strong: {
                    color: '$CodGray700',
                    borderBottom: '1px solid $CodGray700',
                }
            },
    
            strong: {
                fontWeight: '$semibold',
                fontSize: '$md',
                transition: 'border 0.3s ease-in-out',
                borderBottom: '1px solid rgba(0, 0, 0, 0)',
            },
            span: {
                color: '$CodGray700',
            }
        },
    },


    p: {
        color: '$CodGray700',
        fontWeight: '$light',
    }
})