import { styled } from "../../../stitches.config";

export const FooterContainer = styled('footer', {
    width: 'fit-content',
    display: 'flex',
    gap: '$2',
    margin: '0 auto',
    a:{
        fontSize: '$sm',
        fontWeight: '$light',
    },
   

    '@sm': {
        gap: '$6',
        padding: '$2',
    }
})