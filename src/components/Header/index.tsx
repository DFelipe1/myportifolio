import { Command } from "@phosphor-icons/react/dist/ssr";
import { HeaderContainer } from "./styles";

export function Header(){
    return(
        <HeaderContainer>
            <span>Logo</span>

            <button>
                <Command size={24}/>
            </button>
        </HeaderContainer>
    )
}