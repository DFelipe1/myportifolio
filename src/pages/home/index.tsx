import { NextSeo } from "next-seo";

import { Hero, HomeContainer } from "@/styles/Home";
import { Text } from "@/styles/Text";
import { Tag } from "@/styles/Tag";
import { Heading } from "@/styles/Heading";
import { ShortcutHome } from "@/components/ShortcutHome";


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
                        <Tag css={{
                            '@lg': { fontSize: '$2xl' },
                        }}>
                            {hourActual > 0 && hourActual < 12 ? 'Bom dia' : hourActual < 19 ? 'Boa tarde' : 'Boa noite'}! Eu sou o
                        </Tag>
                        <Heading 
                            as='h1' 
                            size={"md"}
                            css={{
                                '@sm': { fontSize: '$6xl' },
                                '@lg': { fontSize: '$8xl' },
                            }}
                        >
                            David Felipe
                        </Heading>

                        <Heading 
                            as='span' 
                            size={"sm"} 
                            fontWeight={"bold"} 
                            css={{
                                '@lg': { fontSize: '$4xl' },
                            }}
                        >
                            ui/ux Designer & Desenvolvdor web
                        </Heading>
                    </div>
                    <Text
                        size={"sm"}
                        css={{
                            '@sm': { fontSize: '$md' },
                            '@lg': { fontSize: '$xl' },
                        }}
                    >
                        Apaixonado por criar interfaces intuitivas e experiências digitais envolventes. 
                        Combinando criatividade e tecnologia, transformo ideias em soluções funcionais e 
                        atraentes. 
                    </Text>

                    <ShortcutHome/>
                   
                </Hero>
            </HomeContainer>
            
        </>
    )
}