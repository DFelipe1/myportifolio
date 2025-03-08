import { styled } from "../../../stitches.config";

export const HomeContainer = styled('main', {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$6',

    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',

        button: {
            border: 0,
            backgroundColor: "transparent",
            borderRadius: '$md',
            padding: '$4',
            transition: 'all',
            transitionDuration: '0.5s',
            color: '$CodGray950',
    
            cursor: 'pointer',
    
            '&:hover': {
                backgroundColor: '$AlbescentWhite200',
              },
        }
    },

    nav: {
        flex: 1,
        maxWidth: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',

        a: {
            flex: 1,
            borderRadius: '$sm',
    
            padding: '$4 $2',
            borderBottom: '1px solid $CodGray950'
        }
    }
})

