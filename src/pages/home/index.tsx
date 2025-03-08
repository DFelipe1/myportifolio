import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import { NextSeo } from "next-seo";

import { Command } from '@phosphor-icons/react'
import { HomeContainer } from "./styles";

export default function Home(){
    return (
        <>
         <NextSeo
            title="David Felipe | Portfolio"
            description="Olá Me chamo David, sou um Desenvolvedor front-end e Designer, vamos nos conhecer melhor?"
        />
            
            <HomeContainer>
                <div>
                    <Heading as='h1' size={"xl"}>David Felipe</Heading>
                    <Heading as='span' size={"sm"} fontWeight={"bold"}>ui/ux Designer & Desenvolvdor web</Heading>
                    <Text>ui/ux Designer & Desenvolvdor web</Text>
                </div>

                <nav>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Blog</a>
                </nav>

            </HomeContainer>
            
        </>
    )
}