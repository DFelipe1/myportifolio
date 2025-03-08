import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Home(){
    return (
        <>
         <NextSeo
            title="David Felipe | Portfolio"
            description="Olá Me chamo David, sou um Desenvolvedor front-end e Designer, vamos nos conhecer melhor?"
        />
            <Heading as='h1' size={"xl"}>David Felipe</Heading>
            <Heading as='span' size={"sm"} fontWeight={"bold"}>ui/ux Designer & Desenvolvdor web</Heading>
            <Text>ui/ux Designer & Desenvolvdor web</Text>
        </>
    )
}