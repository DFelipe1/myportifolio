import { HeaderContainer } from "./styles";
import { Command, SunDim, MoonStars } from "@phosphor-icons/react/dist/ssr";
import { useKBar } from "kbar";
import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

export function Header(){

    const { query } = useKBar();
    const { theme, toggleTheme } = useTheme();

    return(
        <HeaderContainer>
        <Link href={'/'}>D</Link>

        <div>
          <button onClick={toggleTheme}>
            {theme === 'light' ? <MoonStars size={20} /> : <SunDim size={20} />}
          </button>
          <button onClick={() => query.toggle() }>
            <Command size={24}/>
          </button>
        </div>
        </HeaderContainer>
    )
}