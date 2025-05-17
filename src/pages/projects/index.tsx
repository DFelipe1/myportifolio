import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import { ArrowCircleLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Box, ListProjects, ListWrapper, ProjectBox, ProjectCard, ProjectContainer, SectionProjects } from "./styles";
import { BackGo } from "@/components/BackGo";
import { Divider } from "@/styles/Divider";
import { useEffect, useState } from "react";
import { Tag } from "@/styles/Tag";

interface ProjectsProps {
    projectId: string,
    name: string,
    describetion: string,
    slug: string,
    createdDate: string,
    tags: string[]
}

export default function Projects() {

  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  
    useEffect(() => {
      async function fetchPosts() {
        try {
          const res = await fetch('/api/getProjects').then((res) => res.json());
          setProjects(res);
        } catch (err) {
          console.error('Erro ao buscar posts:', err);
        }
      }
  
      fetchPosts();
    }, []);

    console.log(projects);

  return (
    <ProjectContainer>
      <BackGo href='/' />

      <Heading as={'h1'}>Trabalhos & Contribuições</Heading>

      {/* <SectionProjects>
        <Heading as={'h2'} size={'sm'}>melhores projetos</Heading>
        <ListWrapper>
         <ProjectCard>
          <Text as={'strong'} size={"md"}>Name Project</Text>
            <Text as={'p'} size={"sm"}>Name Project</Text>
            <Link href='/'>Ver projeto</Link>
         </ProjectCard>
         <ProjectCard>
          <Text as={'strong'} size={"md"}>Name Project</Text>
            <Text as={'p'} size={"sm"}>Name Project</Text>
            <Link href='/'>Ver projeto</Link>
         </ProjectCard>
         <ProjectCard>
            <Text as={'strong'} size={"md"}>Name Project</Text>
            <Text as={'p'} size={"sm"}>Name Project</Text>
            <Link href='/'>Ver projeto</Link>
         </ProjectCard>
         <ProjectCard>
            <Text as={'strong'} size={"md"}>Name Project</Text>
            <Text as={'p'} size={"sm"}>Name Project</Text>
            <Link href='/'>Ver projeto</Link>
         </ProjectCard>
        </ListWrapper>
      </SectionProjects> */}
     
      <SectionProjects>
        {/* <Heading as={'h2'} size={'sm'}>Projetos Relevantes</Heading> */}
        <ListProjects>
          {projects.map((project) => (
            <>
              <ProjectBox key={project.projectId}>
                <Link href={`projects/${project.slug}`}>
                  <Text as={'strong'}>{project.name}</Text>
                  <Box>
                    <Text as={'span'}>{project.createdDate}</Text>
                    <div>
                      {project.tags.map((tag) => (
                        <Tag as={'span'}>{tag}</Tag>
                      ))}
                    </div>
                  </Box>
                </Link>
              </ProjectBox>
              <Divider />
            </>
          ))}
        </ListProjects>
      </SectionProjects>
    </ProjectContainer>
  );
}