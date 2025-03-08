import { styled } from "../../../stitches.config";

export const HomeContainer = styled('main', {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$6',
})

export const Hero = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '$2',
    }
})

export const NavContainer = styled('nav', {
    flex: 1,
    maxWidth: '220px',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    a: {
        flex: 1,
        padding: '$2',
        textAlign: 'right',
        borderBottom: '1px solid $CodGray950',

    }
})