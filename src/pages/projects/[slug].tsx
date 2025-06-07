import { Heading } from "@/styles/Heading"
import { ActionsBox, PostContainer, PostHeader } from "@/styles/Post"
import { Tag } from "@/styles/Tag";
import { Text } from "@/styles/Text"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Box, Cover } from "@/styles/Project";
import { BackGo } from "@/components/BackGo";
import { Skeleton } from "@/components/Skeleton";

interface ProjectProps {
    title: string
    cover: string
    createdDate: string
    tags: string[]
    prototype: string
    code: string
    deploy: string
    content: string
}

export default function Project() {

    const [project, setProject] = useState<ProjectProps>();

    
    const router = useRouter()
    
    useEffect(() => {
        const { slug } = router.query;
        if (!slug) {
            router.push('/projects');
        };
        async function fetchPosts() {
            try {
                const res = await fetch('/api/getProject', {
                    method: 'POST',
                    body: JSON.stringify({ slug: router.query.slug }),
                }).then((res) => res.json());
                setProject(res);
            } catch (err) {
                console.error('Erro ao buscar posts:', err);
                 router.push('/projects')
            }
    }

    fetchPosts();
    }, []);

    if (!project) {
        return (
            <PostContainer>
            <BackGo href='/projects' />
            <PostHeader>
                <div>
                  
                        <Skeleton css={{width: 150, height: "30px"}} />
                  
            
                    <Box>
                        <Skeleton css={{width: 30, height: "20px"}} />
                        <Skeleton css={{width: 30, height: "20px"}} />
                        <Skeleton css={{width: 30, height: "20px"}} />
                    </Box>
                </div>
                <Box>
                    
                    <Skeleton css={{width: 100, height: "20px"}} />

                    <Skeleton css={{width: 100, height: "20px"}} />
                    <Skeleton css={{width: 100, height: "20px"}} />
                
                </Box>
            </PostHeader>
        
            <Box className="content" css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Skeleton css={{ height: '200px', width: '100%' }}/>
            </Box>

        </PostContainer>
        )
    }
    
    return (
        <PostContainer>
            <BackGo href='/projects' />
            <PostHeader>
                <div>
                   
                    <Heading
                        as={'h1'}
                        size={'md'}
                        css={{ 
                            '@md': { fontSize: '6xl' }
                        }}
                    >{project.title}</Heading>
                    <Box>
                        {project.tags.map((tag, index) => (
                            <Tag css={{ width: 'fit-content' }} background={"true"} key={index} as={'span'}>{tag}</Tag>
                        ))}
                    </Box>
                </div>
                <Box>
                
                    <Text as={'span'}>{project.createdDate}</Text>

                    <ActionsBox>
                        {project.deploy && (
                            <Link href={project.deploy} target="_blank">
                                <Tag as={'span'}>Deploy</Tag>
                            </Link>
                        )}
                        {project.code && (
                            <Link href={project.code} target="_blank">
                                <Tag as={'span'}>Código</Tag>
                            </Link>
                        )}
                        {project.prototype && (
                            <Link href={project.prototype} target="_blank">
                                <Tag as={'span'}>Protótipo</Tag>
                            </Link>
                        )}
                    </ActionsBox>
                </Box>
            </PostHeader>
            

            <Cover src={project.cover} alt="imagem do projeto"/>


            <div className="content">
                <Text>
                    <Markdown>
                        {project.content}
                    </Markdown>
                </Text>
            </div>
             <ActionsBox>
                {project.deploy && (
                    <Link href={project.deploy} target="_blank">
                        <Tag as={'span'}>Deploy</Tag>
                    </Link>
                )}
                {project.code && (
                    <Link href={project.code} target="_blank">
                        <Tag as={'span'}>Código</Tag>
                    </Link>
                )}
                {project.prototype && (
                    <Link href={project.prototype} target="_blank">
                        <Tag as={'span'}>Protótipo</Tag>
                    </Link>
                )}
            </ActionsBox>
        </PostContainer>
    )
}