import { styled } from "../../../stitches.config";

export const BackGoContainer = styled('div', {
    a: {
            width: 'fit-content',
            display: 'flex',
            gap: '$2',
            alignItems: 'center',
            color: '$CodGray900',
            textDecoration: 'none',
            transition: 'all 0.3s',
            ackgroundColor: "transparent",
            borderRadius: '$md',
            padding: '$2',
    
            cursor: 'pointer',
    
        '&:hover': {
            backgroundColor: '$AlbescentWhite200',
        },
    }
})