import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { AboutContainer, AboutContent, Carrer } from "./styles";

export default function About() {
    return (
        <AboutContainer>
            <Link href='/'>
                <ArrowCircleLeft size={20} />
                <span>Voltar</span>
            </Link>

            <Heading as={'h1'} size={"lg"}>Sobre mim</Heading>

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
                        Como criador de experiências digitais, meu objetivo é transformar ideias em realidades interativas 
                        que encantam os usuários. Acredito que cada projeto deve contar uma história única, e é essa 
                        narrativa que guia o desenvolvimento de soluções web inovadoras. Ao unir design e tecnologia, 
                        busco criar plataformas que não apenas atendam às necessidades dos clientes, mas que também 
                        proporcionem uma experiência memorável.
                    </Text>

                    <Text>
                        No mundo digital em constante evolução, é fundamental estar à frente das tendências
                        e inovações. Por isso, dedico-me a explorar novas ferramentas e técnicas que possam 
                        aprimorar a experiência do usuário. Cada linha de código que escrevo é pensada para 
                        ser intuitiva e acessível, garantindo que todos possam navegar e interagir com 
                        facilidade. Acredito que a simplicidade é a chave para um design eficaz, e é isso 
                        que busco em cada projeto.
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