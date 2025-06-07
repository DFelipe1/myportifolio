import { styled } from "../../stitches.config"

export const PostContainer = styled('main', {
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

export const PostHeader = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: '$2',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '$2',
    },

    '@md': {
        flexDirection: 'row',
    }
})

export const ActionsBox = styled('div', {
    display: 'flex',
    gap: '$2',
    alignItems: 'center',

    a: {
        textDecoration: 'none',
        color: '$CodGray700',
        fontWeight: '$semibold',
        fontSize: '$sm',
        padding: '$1 $2',
        borderRadius: '$md',
        backgroundColor: 'transparent',
        border: '1px solid $CodGray700',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out',

        '&:hover': {
            backgroundColor: '$CodGray700',
            color: '$AlbescentWhite100',
        }
    }
})