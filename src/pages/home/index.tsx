import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import { NextSeo } from "next-seo";

import { Hero, HomeContainer, NavContainer } from "./styles";
import { Button } from "@/components/Button";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import { Tag } from "@/styles/Tag";

export default function Home(){

    return (
        <>
         <NextSeo
            title="David Felipe | Portfolio"
            description="Olá Me chamo David, sou um Desenvolvedor front-end e Designer, vamos nos conhecer melhor?"
        />
            
            <HomeContainer>
                <Hero>
                    <div>
                        <Tag>
                            Bom dia! Eu sou o
                        </Tag>
                        <Heading as='h1' size={"xl"}>David Felipe</Heading>
                        <Heading as='span' size={"sm"} fontWeight={"bold"}>ui/ux Designer & Desenvolvdor web</Heading>
                    </div>
                    <Text>ui/ux Designer & Desenvolvdor web</Text>
                    <Button>
                        <span>precione ctrl + k para começar</span>
                        <ArrowCircleRight size={20}/>
                    </Button>
                </Hero>

                <NavContainer>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Resume</a>
                </NavContainer>

            </HomeContainer>
            
        </>
    )
}