import { BackGo } from "@/components/BackGo";
import { Heading } from "@/styles/Heading";
import { BlogContainer, BlogList } from "./styles";
import Link from "next/link";
import { Text } from "@/styles/Text";
import { Divider } from "@/styles/Divider";

export default function Blog() {
    return (
        <BlogContainer>
            <BackGo href='/' />
            
            <Heading as={'h1'}>Blog</Heading>

            <BlogList>
                <Link href='/'>
                    <Text as={'strong'}>Name Blog</Text>
                </Link>
    
                <Divider />
    
                <Link href='/'>
                    <Text as={'strong'}>Name Blog</Text>
                </Link>
    
                <Divider />
                
                <Link href='/'>
                    <Text as={'strong'}>Name Blog</Text>
                </Link>
            </BlogList>
        </BlogContainer>
    )
}