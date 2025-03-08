import { ButtonContainer } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
}

export function Button({ children }: ButtonProps) {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}