import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import Link from "next/link";
import { Box, ListProjects, ListWrapper, ProjectBox, ProjectCard, ProjectContainer, SectionProjects } from "@/styles/Project";
import { BackGo } from "@/components/BackGo";
import { Divider } from "@/styles/Divider";
import { Tag } from "@/styles/Tag";
import { ProjectListItem, getAllProjects } from "@/lib/notionHelpers";

interface ProjectsPageProps {
  projects: ProjectListItem[];
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: { projects },
    revalidate: 3600,
  };
}

export default function Projects({ projects }: ProjectsPageProps) {
  return (
    <ProjectContainer>
      <BackGo href='/' />

      <Heading 
        as={'h1'}
        size={"sm"}
        css={{
          '@xs': { fontSize: '$4xl'},
          '@lg': { fontSize: '$6xl'}
        }}
      >
        Trabalhos & Contribuições
      </Heading>

      {projects.length >= 4 && (
        <SectionProjects>
          <Heading as={'h2'} size={'sm'}>melhores projetos</Heading>
          <ListWrapper>
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.projectId}>
                <Link href={`projects/${project.slug}`}>
                  <Text as={'strong'} size={"md"}>{project.name}</Text>
                  <Text as={'p'} size={"sm"}>{project.description}</Text>
                  <Text as={'span'}>Ver projeto</Text>
                </Link>
              </ProjectCard>
            ))}
          </ListWrapper>
        </SectionProjects>
      )}
      
      <SectionProjects>
        <ListProjects>
          {projects.length === 0 && (
            <Box css={{ display: 'flex', height:'40vh' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Nenhum projeto publicado ainda.</Text>
              <Text>Volte mais tarde!</Text>
            </Box>
          )}
          
          {projects.map((project) => (
            <div key={project.projectId}>
              <ProjectBox>
                <Link href={`projects/${project.slug}`}>
                  <Text as={'strong'}>{project.name}</Text>
                  <Box css={{alignItems:'end' }}>
                    <Text as={'span'}>{project.createdDate}</Text>
                    <div>
                      {project.tags.map((tag) => (
                        <Tag background={"true"} as={'span'} key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </Box>
                </Link>
              </ProjectBox>
              <Divider />
            </div>
          ))}
        </ListProjects>
      </SectionProjects>
    </ProjectContainer>
  );
}