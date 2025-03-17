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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    span: {
        color: '$CodGray700',
        fontWeight: '$light',
    }
})