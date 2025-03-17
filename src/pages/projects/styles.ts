import { styled } from "../../../stitches.config";

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

    a: {
        color: '$CodGray950',
        textDecoration: 'none',
        transition: 'border 0.3s',
        borderBottom: '2px solid rgba(0, 0, 0, 0)',
        width: 'fit-content',

        '&:hover': {
            color: '$CodGray700',
            borderBottom: '2px solid $CodGray700',
        },

        strong: {
            fontWeight: '$semibold',
            fontSize: '$md',
        },
    },
})

