import { ComponentProps, ElementType } from "react";
import { styled } from "../../stitches.config";

export const Button = styled('button', {
    width: 'fit-content',
    border: 0,
    backgroundColor: "$CodGray950",
    borderRadius: '$md',
    padding: '$3',
    transition: 'all',
    transitionDuration: '0.5s',

    color: '$AlbescentWhite50',
    fontSize: '$4',
    fontWeight: '$bold',
    lineHeight: '$short',
    
    display: 'flex',
    gap: '$3',
    alignItems: 'center',

    cursor: 'pointer',

    '&:focus': {
        boxShadow: '0 0 3px $CodGray900'
    },

    '&:hover': {
        backgroundColor: '$CodGray900',
    },
    
})

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
  }
  
  Button.displayName = 'Button'