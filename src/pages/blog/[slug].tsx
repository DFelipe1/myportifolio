import { useRouter } from "next/router"
import { Heading } from "@/styles/Heading"
import { Text } from "@/styles/Text"
import { PostContainer, PostHeader } from "@/styles/Post"
import { useEffect, useState } from "react";
import { Box } from "@/components/Box";
import { Tag } from "@/styles/Tag";
import { Cover } from "@/styles/Project";
import Markdown from "react-markdown";
import { Skeleton } from "@/components/Skeleton";
import { BackGo } from "@/components/BackGo";
import { NextSeo } from "next-seo";

interface ArticleProps {
    title: string
    cover: string
    createdDate: string
    tags: string[]
    content: string
}

export default function Article(){

    const [article, setArticle] = useState<ArticleProps>();
    
        
        const router = useRouter()
        
        useEffect(() => {
            const { slug } = router.query;
            if (!slug) {
                router.push('/blog');
            };
            async function fetchPosts() {
                try {
                    const res = await fetch('/api/getArticleContent', {
                        method: 'POST',
                        body: JSON.stringify({ slug: slug }),
                    }).then((res) => res.json());
                    setArticle(res);
                } catch (err) {
                    console.error('Erro ao buscar posts:', err);
                }
        }
    
        fetchPosts();
        }, []);
    
        if (!article) {
            return (
                <PostContainer>
                    <BackGo href='/blog' />
                    <PostHeader>
                        <div>
                            <Skeleton css={{ height: '30px', width: '200px' }}/>
                        </div>
                        <Skeleton css={{ height: '20px', width: '100px' }}/>
                    </PostHeader>

                    
                    <Box className="content" css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Skeleton css={{ height: '20px', width: '100%' }}/>
                        <Skeleton css={{ height: '20px', width: '100%' }}/>
                        <Skeleton css={{ height: '20px', width: '100%' }}/>
                    </Box>
                </PostContainer>
            )
        }
        

    return(
        <PostContainer>
            <NextSeo
                title={article.title}
                openGraph={{
                    url: `https://davidfelipe.dev/blog/${router.query.slug}`,
                }}
            />
            <BackGo href='/blog' />
            <PostHeader>
                 <div>
                    <Heading
                        as={'h1'}
                        size={"sm"}
                        css={{
                            width: '100%',
                            '@lg': { fontSize: '$6xl' }
                        }}
                    >
                        {article.title}
                    </Heading>
                    <Box>
                        {article.tags.map((tag, index) => (
                            <Tag css={{ width: 'fit-content' }} background={"true"} key={index} as={'span'}>{tag}</Tag>
                        ))}
                    </Box>
                </div>
                <Text as={'span'} css={{ minWidth: 'fit-content' }}>{article.createdDate}</Text>
            </PostHeader>
            
            {article.cover && (
                <Cover src={article.cover} alt="imagem do projeto"/>
            )}
            
            <div className="content">
                <Text>
                    <Markdown>
                        {article.content}
                    </Markdown>
                </Text>
            </div>
        </PostContainer>
    )
}