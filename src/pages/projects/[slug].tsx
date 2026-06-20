import { Heading } from "@/styles/Heading"
import { FloatingBar, PostContainer, PostHeader } from "@/styles/Post"
import { Tag } from "@/styles/Tag";
import { Text } from "@/styles/Text"
import { NextSeo } from "next-seo";
import { markdownComponents } from "@/components/MarkdownRenderer";
import Markdown from "react-markdown";
import { Box } from "@/styles/Project";
import CoverWithRefresh from "@/components/CoverWithRefresh";
import { BackGo } from "@/components/BackGo";
import { GlobeHemisphereWest, Code, FigmaLogo } from "@phosphor-icons/react/dist/ssr";
import { ProjectDetail, getProjectBySlug, getAllProjectSlugs } from "@/lib/notionHelpers";

interface ProjectPageProps {
  project: ProjectDetail;
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { notFound: true };
  return {
    props: { project },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const slugs = await getAllProjectSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: "blocking" };
}

export default function Project({ project }: ProjectPageProps) {
  return (
    <>
      <NextSeo
        title={`${project.title} | David Felipe Portfolio`}
        description={project.content?.replace(/[#*`\n]/g, "").slice(0, 160) || "Projeto desenvolvido por David Felipe"}
        openGraph={{
          title: project.title,
          description: project.content?.replace(/[#*`\n]/g, "").slice(0, 160),
          images: [],
        }}
      />
      <PostContainer>
        <BackGo href="/projects" />
        <PostHeader>
          <div>
            <Heading
              as={"h1"}
              size={"md"}
              css={{
                "@md": { fontSize: "6xl" },
              }}
            >
              {project.title}
            </Heading>
            <Box>
              {project.tags.map((tag, index) => (
                <Tag css={{ width: "fit-content" }} background={"true"} key={index} as={"span"}>{tag}</Tag>
              ))}
            </Box>
          </div>
          <Box>
            <Text as={"span"}>{project.createdDate}</Text>
          </Box>
        </PostHeader>

        <CoverWithRefresh pageId={project.pageId} alt="imagem do projeto" />

        <div className="content">
          <Markdown components={markdownComponents}>
            {project.content}
          </Markdown>
        </div>

        <FloatingBar>
          {project.deploy && (
            <a href={project.deploy} target="_blank" rel="noopener noreferrer">
              <GlobeHemisphereWest size={16} weight="bold" />
              Deploy
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer">
              <Code size={16} weight="bold" />
              Código
            </a>
          )}
          {project.prototype && (
            <a href={project.prototype} target="_blank" rel="noopener noreferrer">
              <FigmaLogo size={16} weight="bold" />
              Protótipo
            </a>
          )}
        </FloatingBar>
      </PostContainer>
    </>
  )
}
