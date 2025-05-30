import { styled } from "../../../stitches.config";

export const HeaderContainer = styled('header', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    a: {
        textDecoration: 'none',
        color: '$AlbescentWhite100',
        fontFamily: '$jetbrains_mono',
        fontSize: '$2xl',
        fontWeight: '$bold',
        padding: '0 $3',
        backgroundColor: '$CodGray700',
    },

    button: {
        border: 0,
        backgroundColor: "transparent",
        borderRadius: '$md',
        padding: '$2',
        transition: 'all',
        transitionDuration: '0.5s',
        color: '$CodGray950',

        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '$AlbescentWhite200',
          },
    }
})