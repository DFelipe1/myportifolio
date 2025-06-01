import { styled } from "../../stitches.config";

export const AboutContainer = styled('div', {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '$6',

    a: {
        display: 'flex',
        gap: '$2',
        alignItems: 'center',
        color: '$CodGray900',
        textDecoration: 'none',
        transition: 'color 0.3s',

        '&:hover': {
            color: '$CodGray800',
        }
    }
})

export const AboutContent = styled('div', {
    flex: 1,
    display: 'flex',
    gap: '$8',

    img: {
        borderRadius: '$md',
        mixBlendMode: 'luminosity',
        objectFit: 'cover',
    },

    div: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',
    }
})

export const Carrer = styled('section', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '$6',

})