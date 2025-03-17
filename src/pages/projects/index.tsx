import { Heading } from "@/styles/Heading";
import { Text } from "@/styles/Text";
import { ArrowCircleLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ListProjects, ListWrapper, ProjectCard, ProjectContainer, SectionProjects } from "./styles";
import { BackGo } from "@/components/BackGo";
import { Divider } from "@/styles/Divider";

export default function Projects() {
  return (
    <ProjectContainer>
      <BackGo href='/' />

      <Heading as={'h1'}>Trabalhos & Contribuições</Heading>

      <SectionProjects>
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
      </SectionProjects>
     
      <SectionProjects>
        <Heading as={'h2'} size={'sm'}>outros projetos</Heading>
        <ListProjects>
         <Link href='/'>
          <Text as={'strong'}>Name Project</Text>
         </Link>

        <Divider />

         <Link href='/'>
          <Text as={'strong'}>Name Project</Text>
         </Link>

         <Divider />
         
         <Link href='/'>
            <Text as={'strong'}>Name Project</Text>
         </Link>
        </ListProjects>
      </SectionProjects>
    </ProjectContainer>
  );
}