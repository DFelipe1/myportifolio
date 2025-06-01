import { BackGo } from "@/components/BackGo";
import { Heading } from "@/styles/Heading";
import { BlogContainer, BlogLinkLine, BlogList } from "@/styles/Blog";
import Link from "next/link";
import { Text } from "@/styles/Text";
import { Divider } from "@/styles/Divider";
import { useEffect, useState } from "react";
import { Tag } from "@/styles/Tag";
import { Box } from "@/components/Box";
import { Skeleton } from "@/components/Skeleton";

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



    return (
        <BlogContainer>
            <BackGo href='/' />
            
            <Heading as={'h1'}>Blog</Heading>

            <BlogList>
                {/* Loading state */}
                {!articles && (
                    <>
                        <Box css={{ display: 'flex' , flexDirection: 'column', gap: '16px'}}>
                            <Box css={{ width: '40%'}}>
                                <Skeleton css={{ height: '30px'}}/>
                            </Box>
                            <Box css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                                <Skeleton css={{ height: '20px'}}/>
                                <Skeleton css={{ height: '20px'}}/>
                            </Box>
                        </Box>
                        <Box css={{ display: 'flex' , flexDirection: 'column', gap: '16px'}}>
                            <Box css={{ width: '40%'}}>
                                <Skeleton css={{ height: '30px'}}/>
                            </Box>
                            <Box css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                                <Skeleton css={{ height: '20px'}}/>
                                <Skeleton css={{ height: '20px'}}/>
                            </Box>
                        </Box>
                        <Box css={{ display: 'flex' , flexDirection: 'column', gap: '16px'}}>
                            <Box css={{ width: '40%'}}>
                                <Skeleton css={{ height: '30px'}}/>
                            </Box>
                            <Box css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                                <Skeleton css={{ height: '20px'}}/>
                                <Skeleton css={{ height: '20px'}}/>
                            </Box>
                        </Box>
                    </>
                )}

                {/* No articles state */}
                {articles.length === 0 && (
                    <Box css={{ display: 'flex', height:'40vh' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Ainda estou escrevendo ou buscando coragem para postar 😅.</Text>
                        <Text>Volte mais tarde!</Text>
                    </Box>
                )}

                {/* Articles list */}
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