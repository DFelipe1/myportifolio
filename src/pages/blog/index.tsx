import { BackGo } from "@/components/BackGo";
import { Heading } from "@/styles/Heading";
import { BlogContainer, BlogLinkLine, BlogList } from "@/styles/Blog";
import Link from "next/link";
import { Text } from "@/styles/Text";
import { Divider } from "@/styles/Divider";
import { Tag } from "@/styles/Tag";
import { Box } from "@/components/Box";
import { ArticleListItem, getAllArticles } from "@/lib/notionHelpers";

interface BlogPageProps {
  articles: ArticleListItem[];
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  return {
    props: { articles },
    revalidate: 3600,
  };
}

export default function Blog({ articles }: BlogPageProps) {
    return (
        <BlogContainer>
            <BackGo href='/' />
            
            <Heading 
                as={'h1'}
                size={"md"}
                css={{
                    '@lg': { fontSize: '$6xl'}
                }}
            >
                Blog
            </Heading>

            <BlogList>
                {/* No articles state */}
                {articles.length === 0 && (
                    <Box css={{ display: 'flex', height:'40vh' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Ainda estou escrevendo ou buscando coragem para postar 😅.</Text>
                        <Text>Volte mais tarde!</Text>
                    </Box>
                )}

                {/* Articles list */}
                {articles.map((article) => (
                    <div key={article.articleId}>
                        <BlogLinkLine>
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

                            <Text
                                css={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    lineHeight: '$short',
                                    fontSize: '$sm',
                                    fontWeight: '$light',

                                    '@sm': {
                                        fontSize: '$md',
                                        lineHeight: '$base',
                                    },
                                }}
                            >{article.description}</Text>
                            
                        </BlogLinkLine>
                        <Divider />
                    </div>
                ))}
            </BlogList>
        </BlogContainer>
    )
}