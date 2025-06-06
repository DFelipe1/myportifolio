import { styled } from "../../stitches.config";

export const Layout = styled('div', {
    width: '100%',
    minHeight: 'calc(100vh - 56px)', // Adjust for mobile
    maxWidth: '400px',
    margin: '0 auto',
    padding: '$6',

    display: 'flex',
    flexDirection: 'column',
    gap: '$10',

    '@xs': {
        maxWidth: '500px',
        
    },

    '@sm': {
        maxWidth: '600px',
        padding: '$6 0',
    },

    '@md': {
        maxWidth: '700px',
        minHeight: '100vh',
    },

    '@lg': {
        maxWidth: '900px',
    },
})