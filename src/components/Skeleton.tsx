import { keyframes, styled } from "../../stitches.config";

const animate = keyframes({
    'from': { 
        backgroundPosition: '0% 0%'
     },
    '100%': { 
        backgroundPosition: '130% 0%'
     },
})

export const Skeleton = styled('div', {
    width: '100%',
    borderRadius: '$4',
    background: 'linear-gradient(90deg, $AlbescentWhite200 0%, $AlbescentWhite300 50%, $AlbescentWhite200 100%)',
    backgroundSize: '400% 400%',
    animation: `${animate} 1.5s ease-in-out infinite`,
    cursor: 'progress',
})