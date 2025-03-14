import { useState } from "react";
import { NextSeo } from "next-seo";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";

import { Hero, HomeContainer, NavContainer } from "./styles";
import { Text } from "@/styles/Text";
import { Tag } from "@/styles/Tag";
import { Heading } from "@/styles/Heading";
import Link from "next/link";

export default function Home(){

    const hourActual = new Date().getHours()

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
                            {hourActual > 0 && hourActual < 12 ? 'Bom dia' : hourActual < 19 ? 'Boa tarde' : 'Boa noite'}! Eu sou o
                        </Tag>
                        <Heading as='h1' size={"xl"}>David Felipe</Heading>
                        <Heading as='span' size={"sm"} fontWeight={"bold"}>ui/ux Designer & Desenvolvdor web</Heading>
                    </div>
                    <Text>ui/ux Designer & Desenvolvdor web</Text>
                   
                </Hero>

                <NavContainer>
                    <Link href={'/about'}>Sobre mim</Link>
                    <Link href={'/projects'}>Projetos</Link>
                    <Link href={'/blog'}>Blog</Link>
                </NavContainer>

            </HomeContainer>
            
        </>
    )
}