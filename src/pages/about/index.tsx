import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import Image from "next/image";
import { AboutContainer, AboutContent, Carrer } from "@/styles/About";
import { BackGo } from "@/components/BackGo";
import { NextSeo } from "next-seo";

export default function About() {
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
            <Carrer>
                <Heading as={'h2'} size={'md'}>Carreira</Heading>
                <span>Preciso de um emprego</span>
            </Carrer>

        </AboutContainer>
    )
}