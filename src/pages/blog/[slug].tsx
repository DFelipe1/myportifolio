import { Heading } from "@/styles/Heading"
import { Text } from "@/styles/Text"
import { PostContainer, PostHeader } from "@/styles/Post"
import { Box } from "@/components/Box";
import { Tag } from "@/styles/Tag";
import CoverWithRefresh from "@/components/CoverWithRefresh";
import { NextSeo } from "next-seo";
import { markdownComponents } from "@/components/MarkdownRenderer";
import Markdown from "react-markdown";
import { BackGo } from "@/components/BackGo";
import { ArticleDetail, getArticleBySlug, getAllArticleSlugs } from "@/lib/notionHelpers";

interface ArticlePageProps {
  article: ArticleDetail;
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { notFound: true };
  return {
    props: { article },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const slugs = await getAllArticleSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: "blocking" };
}

export default function Article({ article }: ArticlePageProps) {
  return (
    <>
      <NextSeo
        title={`${article.title} | David Felipe Blog`}
        description={article.content?.replace(/[#*`\n]/g, "").slice(0, 160) || "Artigo técnico por David Felipe"}
        openGraph={{
          title: article.title,
          description: article.content?.replace(/[#*`\n]/g, "").slice(0, 160),
          images: [],
        }}
      />
      <PostContainer>
        <BackGo href="/blog" />
        <PostHeader>
          <div>
            <Heading
              as={"h1"}
              size={"sm"}
              css={{
                width: "100%",
                "@lg": { fontSize: "$6xl" },
              }}
            >
              {article.title}
            </Heading>
            <Box>
              {article.tags.map((tag, index) => (
                <Tag css={{ width: "fit-content" }} background={"true"} key={index} as={"span"}>{tag}</Tag>
              ))}
            </Box>
          </div>
          <Text as={"span"} css={{ minWidth: "fit-content" }}>{article.createdDate}</Text>
        </PostHeader>

        <CoverWithRefresh pageId={article.pageId} alt="imagem do artigo" />

        <div className="content">
          <Markdown components={markdownComponents}>
            {article.content}
          </Markdown>
        </div>
      </PostContainer>
    </>
  )
}
