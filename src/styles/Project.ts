import { styled } from "../../stitches.config";

export const ProjectContainer = styled('main', {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',
})

export const SectionProjects = styled('section', {
    width: '100%',

    h2:{
        marginBottom: '$6',
    }
})

export const ListWrapper = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(250px, 1fr))',
    gap: '$8',
    padding: '$2',
})

export const ProjectCard = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',

    strong: {
        color: '$CodGray950',
        fontWeight: '$semibold',
    },

    a: {
        color: '$CodGray950',
        textDecoration: 'none',
        transition: 'border 0.3s',
        borderBottom: '2px solid rgba(0, 0, 0, 0)',
        width: 'fit-content',

        '&:hover': {
            color: '$CodGray700',
            borderBottom: '2px solid $CodGray700',
        }
    },

    p: {
        color: '$CodGray700',
        fontWeight: '$light',
    }

})

export const ListProjects = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

})

export const ProjectBox = styled('div', {
    width: '100%',
    padding: '$2',
    borderBottom: '2px solid rgba(0, 0, 0, 0)',
    transition: '0.5s',
    borderRadius: '$md',

    a: {
        flex: '1',
        color: '$CodGray950',
        textDecoration: 'none',
        
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        strong: {
            with: '100%',
            fontWeight: '$semibold',
            fontSize: '$md',
            lineHeight: '$shorter',
            color: '$CodGray900',

            '@xs': {
                fontSize: '$lg',
            }
        }
    },

    '&:hover': {
        backgroundColor: '$AlbescentWhite200',
    },
})

export const Box = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    marginTop: '$2',
    span: {
        width: 'fit-content',
        textAlign: 'right',
        fontSize: '$xxs',
        fontWeight: '$light',

        '@xs': {
            fontSize: '$xs',
        },

        '@sm': {
            fontSize: '$sm',
        }
    },

    div: {
        display: 'flex',
        gap: '$1',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'end',
    }
})

export const Cover = styled('img', {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '$md',
    marginBottom: '$2',
})
