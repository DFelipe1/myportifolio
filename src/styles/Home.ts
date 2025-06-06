import { styled } from "../../stitches.config";

export const HomeContainer = styled('main', {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$6',
})

export const Hero = styled('div', {
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '$2',
    },

    p: {
        lineHeight: '$short',
        fontWeight: '$light',
    },

    '@lg': {
        maxWidth: '700px',
    }
   
})
