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

    a: {
        color: '$CodGray950',
        textDecoration: 'none',
        transition: 'border 0.3s',
        borderBottom: '2px solid rgba(0, 0, 0, 0)',
        width: 'fit-content',

        '&:hover': {
            color: '$CodGray700',
            borderBottom: '2px solid $CodGray700',
        },

        strong: {
            fontWeight: '$semibold',
            fontSize: '$md',
        },
    },
})

export const BlogPost = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',

    '.content': {
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',
        width: '100%',

        p: {
            color: '$CodGray700',
            fontWeight: '$light',
        },
    
        img: {
            width: '100%',
            height: 'auto',
            borderRadius: '$md'
        }
    }, 

})

export const BlogPostHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    span: {
        color: '$CodGray700',
        fontWeight: '$light',
    }
})