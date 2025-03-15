import Link from "next/link";
import { BackGoContainer } from "./styles";
import { ArrowCircleLeft } from "@phosphor-icons/react/dist/ssr";

interface BackGoProps {
    href: string;
}

export function BackGo({ href }: BackGoProps) {
    return (
        <BackGoContainer>
            <Link href={href}>
                <ArrowCircleLeft size={20} />
                <span>Voltar</span>
            </Link>
        </BackGoContainer>
    )
}