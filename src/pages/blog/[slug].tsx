import { useRouter } from "next/router"
import { Heading } from "@/styles/Heading"
import { Text } from "@/styles/Text"
import { PostContainer, PostHeader } from "@/styles/Post"
import { useEffect, useState } from "react";
import { Box } from "@/components/Box";
import { Tag } from "@/styles/Tag";
import { Cover } from "@/styles/Project";
import { NextSeo } from "next-seo";
import { markdownComponents } from "@/components/MarkdownRenderer";
import Markdown from "react-markdown";
import { Skeleton } from "@/components/Skeleton";
import { BackGo } from "@/components/BackGo";

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
            const slug = router.query.slug;
            if (!slug) {
                router.push('/blog');
                return;
            };
            async function fetchPosts() {
                try {
                    const res = await fetch('/api/getArticleContent', {
                        method: 'POST',
                        body: JSON.stringify({ slug }),
                    }).then((res) => res.json());
                    setArticle(res);
                } catch (err) {
                    console.error('Erro ao buscar posts:', err);
                }
        }
    
        fetchPosts();
        }, [router.query.slug]);
    
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
        <>
        <NextSeo
          title={`${article.title} | David Felipe Blog`}
          description={article.content?.replace(/[#*`\n]/g, '').slice(0, 160) || "Artigo técnico por David Felipe"}
          openGraph={{
            title: article.title,
            description: article.content?.replace(/[#*`\n]/g, '').slice(0, 160),
            images: article.cover ? [{ url: article.cover }] : [],
          }}
        />
        <PostContainer>
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
                <Markdown components={markdownComponents}>
                    {article.content}
                </Markdown>
            </div>
        </PostContainer>
        </>
    )
}