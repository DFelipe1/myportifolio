export interface CareerItem {
  year: string;
  title: string;
  description: string;
  details?: string[];
}

export const career: CareerItem[] = [
  {
    year: "2023",
    title: "Auxiliar de Protético",
    description: "Minha primeira experiência profissional, desenvolvendo responsabilidade, organização, atenção aos detalhes e trabalho em equipe.",
  },
  {
    year: "2024",
    title: "Início da Graduação em Análise e Desenvolvimento de Sistemas",
    description: "Comecei minha formação em desenvolvimento de software, aprofundando conhecimentos em programação, banco de dados, desenvolvimento web e engenharia de software.",
  },
  {
    year: "2024",
    title: "TuneWave",
    description: "Projeto conceitual de aplicativo de streaming musical.",
    details: [
      "UX Design",
      "Arquitetura de navegação",
      "Wireframes",
      "Prototipação no Figma",
      "Design de interfaces",
    ],
  },
  {
    year: "2024",
    title: "Quebra-Galho",
    description: "Primeira experiência prática atuando em projetos digitais.",
    details: [
      "Desenvolvimento Front-end",
      "Interfaces responsivas",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Estruturação de fluxos e experiência do usuário",
    ],
  },
  {
    year: "2024",
    title: "Social Media Voluntário",
    description: "Atuação na equipe de mídia da igreja.",
    details: [
      "Artes para redes sociais",
      "Comunicação visual",
      "Materiais para eventos",
      "Conteúdo digital",
    ],
  },
  {
    year: "2025",
    title: "Instrutor de Informática",
    description: "Passei a compartilhar conhecimento através do ensino.",
    details: [
      "Ministrar aulas de informática e design",
      "Desenvolver materiais didáticos",
      "Orientar projetos digitais",
      "Apoiar alunos em sua evolução técnica",
    ],
  },
  {
    year: "2026",
    title: "Front-end & UI Design",
    description: "Atualmente foco meus estudos e projetos na interseção entre desenvolvimento Front-end, UI Design, Experiência do Usuário e Produtos Digitais.",
  },
];
