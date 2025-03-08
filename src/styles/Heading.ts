import { ComponentProps, ElementType } from "react";
import { styled } from "../../stitches.config";

export const Heading = styled('h1', {
    fontFamily: '$jetbrains_mono',
    lineHeight: '$shorter',
    margin: 0,
    color: '$CodGray950',

    variants: {
        size: {
            sm: {fontSize: '$2xl'},
            md: {fontSize: '$5xl'},
            lg: {fontSize: '$6xl'},
            xl: {fontSize: '$7xl'},
        },
        fontWeight: {
            extrabold: {fontWeight: '$extrabold'},
            bold: {fontWeight: '$bold'}
        },
        
    },
    defaultVariants: {
        size: 'md',
        fontWeight: 'extrabold'
    }
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
    as?: ElementType
}