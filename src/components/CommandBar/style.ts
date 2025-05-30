import { KBarAnimator, KBarPositioner, KBarSearch } from "kbar"
import { styled } from "../../../stitches.config"

export const Positioner = styled(KBarPositioner, {
    position: 'fixed',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    inset: '0px',
    background: 'rgba(0, 0, 0, .5)',
  })

export const Search = styled(KBarSearch, {
padding: '12px 16px',
fontSize: '16px',
width: '100%',
boxSizing: 'border-box',
outline: 'none',
border: 'none',
margin: 0,
background: '$AlbescentWhite50',
color: '$CodGray700',
})


export const GroupName = styled('div', {
padding: '8px 16px',
fontSize: '10px',
textTransform: 'uppercase',
letterSpacing: '1px',
background: '$command',
})

export const Kbd = styled('kbd', {
background: 'rgba(0, 0, 0, .1)',
color: '$CodGray800',
padding: '4px 8px',
borderRadius: '$px',
textTransform: 'uppercase',
})

export const Action = styled('div', {
display: 'flex',
gap: '8px',
alignItems: 'center',
})

export const ActionRow = styled('div', {
display: 'flex',
flexDirection: 'column',
})

export const Animator = styled(KBarAnimator, {
backgroundColor: '$AlbescentWhite50',
maxWidth: '600px',
width: '100%',
color: '$CodGray800',
borderRadius: '8px',
overflow: 'hidden',
'@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '$AlbescentWhite50',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
},

/* Hide scrollbar for Chrome, Safari and Opera */
'& > div > div::-webkit-scrollbar': {
    display: 'none',
},

/* Hide scrollbar for IE, Edge and Firefox */
'& > div > div': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
},
})

export const getResultStyle = (active: boolean) => {
    return {
        padding: '12px 16px',
        background: active ? 'rgba(0, 0, 0, 0.1)' : '$AlbescentWhite50',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 0,
        cursor: 'pointer',
        color: '$CodGray800',
    }
}