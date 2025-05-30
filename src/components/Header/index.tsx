import { HeaderContainer } from "./styles";
import { Command } from "@phosphor-icons/react/dist/ssr";
import { useKBar } from "kbar";
import Link from "next/link";

export function Header(){

    const { query } = useKBar();

    return(
        <HeaderContainer>
        <Link href={'/'}>D</Link>

        <button onClick={() => query.toggle() }>
            <Command size={24}/>
        </button>
        </HeaderContainer>
    )
}