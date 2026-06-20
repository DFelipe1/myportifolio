import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import Image from "next/image";
import { AboutContainer, AboutContent, CarrerSection, TimelineWrapper, TimelineTrack, TimelineItem, TimelineDot, TimelineYear, TimelineEvent } from "@/styles/About";
import { BackGo } from "@/components/BackGo";
import { NextSeo } from "next-seo";
import { useRef, useEffect } from "react";

const career = [
    { year: "2023", event: "Auxiliar de Protético" },
    { year: "2024", event: "Curso de Design · Zion " },
    { year: "2024", event: "Início da Graduação ADS" },
    { year: "2024", event: "TuneWave · Ux/UI Design" },
    { year: "2024", event: "Quebra-Galho · Dev Front-end" },
    { year: "2025", event: "Instrutor de Informática" },
    { year: "2026", event: "Front-end & UI Design" },
]

export default function About() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
        }
    }, []);

    return (
        <AboutContainer>
            <NextSeo
                title='Sobre | David Felipe'
                description='Oi, eu sou o David Felipe! Minha jornada no mundo digital começou unindo design e tecnologia para criar experiências interativas.'
            />
            <BackGo href='/' />

            <Heading 
                as={'h1'} 
                size={"md"}
                css={{
                    '@xs': { fontSize: '$6xl'}
                }}
            >
                Sobre mim
            </Heading>

            <AboutContent>
                <Image  
                    src='/static/avatar.jpeg'
                    alt='Eu, jovem de pele parda e cabelos cacheados preto curtos, usando uma camiseta preta, com um leve sorriso no rosto, fazendo sinal com a mão ✌.'
                    width={400}
                    height={400}
                    priority
                />
                <div>
                    <Text>
                        Oi, eu sou o David Felipe! Minha jornada no mundo digital começou unindo design e 
                        tecnologia para criar experiências interativas. Trabalho com UI/UX e desenvolvimento 
                        front-end, sempre buscando transformar ideias em interfaces funcionais e atraentes.
                    </Text>

                    <Text>
                        Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e aprimorando minhas 
                        habilidades com projetos desafiadores. No tempo livre, gosto de explorar novas 
                        tecnologias, criar side projects e, claro, curtir um bom filme.
                    </Text>
                </div>
            </AboutContent>

            <CarrerSection>
                <Heading as={'h2'} size={'sm'}>Carreira</Heading>
                <TimelineWrapper ref={scrollRef}>
                    <TimelineTrack>
                        {career.map((item, index) => {
                            const isActive = index === career.length - 1;
                            return (
                                <TimelineItem key={item.year} active={isActive}>
                                    <TimelineYear>{item.year}</TimelineYear>
                                    <TimelineDot active={isActive} />
                                    <TimelineEvent>{item.event}</TimelineEvent>
                                </TimelineItem>
                            );
                        })}
                    </TimelineTrack>
                </TimelineWrapper>
            </CarrerSection>

        </AboutContainer>
    )
}
