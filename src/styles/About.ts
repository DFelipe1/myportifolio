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
    flexDirection: 'column',
    gap: '$8',

    img: {
        width: '100%',
        borderRadius: '$md',
        mixBlendMode: 'luminosity',
        objectFit: 'cover',
    },

    div: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',
    },

    '@sm': {
        flexDirection: 'row',
        div: {
            width: '60%',
        },
         img: {
            width: '400px',
        },
    },

    '@lg': {
        img: {
            width: '500px',
            height: '500px',
        },
        div: {
            width: '50%',
        },
    }
})

export const CarrerSection = styled('section', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '$6',
    marginTop: '$8',
})

export const TimelineWrapper = styled('div', {
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    paddingBottom: '$2',

    '&::-webkit-scrollbar': {
        display: 'none',
    },
})

export const TimelineTrack = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$10',
    position: 'relative',
    padding: '$8 $4',
    minWidth: 'max-content',

    '&::before': {
        content: '',
        position: 'absolute',
        top: '50%',
        left: '$4',
        right: '$4',
        height: '2px',
        backgroundColor: '$AlbescentWhite200',
        transform: 'translateY(-50%)',
        borderRadius: '$px',
    },
})

export const TimelineItem = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$2',
    scrollSnapAlign: 'center',
    position: 'relative',
    minWidth: '100px',

    variants: {
        active: {
            true: {},
        },
    },
})

export const TimelineDot = styled('div', {
    borderRadius: '$full',
    zIndex: 1,
    transition: 'all 0.3s ease',

    variants: {
        active: {
            true: {
                width: '14px',
                height: '14px',
                backgroundColor: '$CodGray950',
                boxShadow: '0 0 0 4px $colors$AlbescentWhite50',
            },
            false: {
                width: '10px',
                height: '10px',
                backgroundColor: 'transparent',
                border: '2px solid $AlbescentWhite300',
            },
        },
    },

    defaultVariants: {
        active: false,
    },
})

export const TimelineYear = styled('span', {
    fontFamily: '$jetbrains_mono',
    fontSize: '$xs',
    fontWeight: '$bold',
    color: '$CodGray950',
    lineHeight: '$shorter',
    whiteSpace: 'nowrap',
})

export const TimelineEvent = styled('span', {
    fontFamily: '$inter',
    fontSize: '$xxs',
    fontWeight: '$light',
    color: '$CodGray700',
    lineHeight: '$base',
    textAlign: 'center',
    whiteSpace: 'nowrap',

    '@xs': {
        fontSize: '$xs',
    },
})