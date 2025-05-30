import { BackGo } from "@/components/BackGo";
import { Heading } from "@/styles/Heading";
import { BlogContainer, BlogLinkLine, BlogList } from "./styles";
import Link from "next/link";
import { Text } from "@/styles/Text";
import { Divider } from "@/styles/Divider";
import { useEffect, useState } from "react";
import { Tag } from "@/styles/Tag";
import { Box } from "@/components/Box";

interface ArticlesProps{
    articleId: string,
    name: string,
    description: string,
    slug: string,
    createdDate: string,
    tags: string[]
}

export default function Blog() {

    const [articles, setArticles] = useState<ArticlesProps[]>([]);
      
        useEffect(() => {
          async function fetchPosts() {
            try {
              const res = await fetch('/api/getArticlesBlog').then((res) => res.json());
              setArticles(res);
            } catch (err) {
              console.error('Erro ao buscar posts:', err);
            }
          }
      
          fetchPosts();
        }, []);

        if(!articles || articles.length === 0) {
            return (
                 <BlogContainer>
                <BackGo href='/' />
                
                <Heading as={'h1'}>Blog</Heading>
                <Box css={{ display: 'flex', height:'40vh' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Ainda estou escrevendo ou buscando coragem para postar 😅.</Text>
                    <Text>Volte mais tarde!</Text>
                </Box>
            </BlogContainer>
            )
        }

    return (
        <BlogContainer>
            <BackGo href='/' />
            
            <Heading as={'h1'}>Blog</Heading>

            <BlogList>
                {articles.map((article) => (
                    <div>
                        <BlogLinkLine key={article.articleId}>
                            <div>
                                <Link href={`blog/${article.slug}`}>
                                    <Text as={'strong'}>{article.name}</Text>
                                    <Text as={'span'}>|</Text>
                                    <Text as={'span'}>{article.createdDate}</Text>
                                </Link>
                                {article.tags.map((tag) => (
                                    <Tag key={tag} background={true}>{tag}</Tag>
                                ))}
                           </div>

                            <Text>{article.description}</Text>
                            
                        </BlogLinkLine>
                        <Divider />
                    </div>
                ))}
            </BlogList>
        </BlogContainer>
    )
}