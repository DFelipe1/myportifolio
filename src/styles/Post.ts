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

export const FloatingBar = styled('div', {
    position: 'fixed',
    bottom: '$6',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '$1',
    padding: '$2 $4',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 247, 242, 0.9)',
    backdropFilter: 'blur(12px)',
    borderRadius: '$full',
    border: '1px solid $AlbescentWhite200',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    zIndex: 100,

    a: {
        display: 'flex',
        alignItems: 'center',
        gap: '$1',
        textDecoration: 'none',
        color: '$CodGray700',
        fontWeight: '$semibold',
        fontSize: '$xs',
        padding: '$2 $3',
        borderRadius: '$full',
        transition: 'background-color 0.2s ease-in-out',
        lineHeight: '$shorter',

        '@sm': {
            fontSize: '$sm',
            padding: '$2 $4',
        },

        '&:hover': {
            backgroundColor: '$AlbescentWhite300',
            color: '$CodGray950',
        }
    }
})