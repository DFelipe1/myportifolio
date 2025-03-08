import Image from "next/image";
import { Command } from "@phosphor-icons/react/dist/ssr";

import { HeaderContainer } from "./styles";

export function Header(){
    return(
        <HeaderContainer>
            <Image 
                src='/logo.png' 
                alt=" " 
                width={40}
                height={40}
            />

            <button>
                <Command size={24}/>
            </button>
        </HeaderContainer>
    )
}