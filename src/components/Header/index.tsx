import Image from "next/image";


import { HeaderContainer } from "./styles";
import { Command } from "@phosphor-icons/react/dist/ssr";
import { useKBar } from "kbar";

export function Header(){

    const { query } = useKBar();

    return(
        <HeaderContainer>
            <Image 
                src='/logo.png' 
                alt=" " 
                width={40}
                height={40}
            />

        <button onClick={() => query.toggle() }>
            <Command size={24}/>
        </button>
        </HeaderContainer>
    )
}