import { notion } from "./notion";
import { NotionDatabaseResponse } from "@/types/notionDatabaseResponse";
import { NotionToMarkdown } from "notion-to-md";

export interface ProjectListItem {
  projectId: string;
  name: string;
  description: string;
  slug: string;
  createdDate: string;
  tags: string[];
}

export interface ProjectDetail {
  pageId: string;
  title: string;
  cover: string;
  createdDate: string;
  tags: string[];
  prototype: string;
  code: string;
  deploy: string;
  content: string;
}

export interface ArticleListItem {
  articleId: string;
  name: string;
  description: string;
  slug: string;
  createdDate: string;
  tags: string[];
}

export interface ArticleDetail {
  pageId: string;
  title: string;
  cover: string;
  createdDate: string;
  tags: string[];
  content: string;
}

export async function getAllProjects(): Promise<ProjectListItem[]> {
  const databaseId = process.env.NOTION_DATABASE_ID as string;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "publicked",
          checkbox: { equals: true },
        },
      ],
    },
  });

  const typedResponse = response as unknown as NotionDatabaseResponse;
  return typedResponse.results.map((project) => ({
    projectId: project.id,
    name: project.properties.name.title[0]?.text.content,
    description: project.properties.description.rich_text[0]?.text.content,
    slug: project.properties.slug.rich_text[0]?.text.content,
    createdDate: project.properties["created date"].date?.start ?? "",
    tags: project.properties.tags.multi_select.map((tag) => tag.name),
  }));
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const databaseId = process.env.NOTION_DATABASE_ID as string;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "publicked",
          checkbox: { equals: true },
        },
      ],
    },
  });

  const typedResponse = response as unknown as NotionDatabaseResponse;
  return typedResponse.results
    .map((project) => project.properties.slug.rich_text[0]?.text.content)
    .filter(Boolean);
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectDetail | null> {
  const databaseId = process.env.NOTION_DATABASE_ID as string;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: { equals: slug },
        },
      ],
    },
  });

  const typedResponse = response as unknown as NotionDatabaseResponse;
  if (!typedResponse.results[0]) return null;

  const pageId = typedResponse.results[0].id;
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    pageId: typedResponse.results[0].id,
    title: typedResponse.results[0].properties.name.title[0]?.text.content,
    cover:
      typedResponse.results[0].properties["Files & media"].files[0]?.file.url ?? '',
    createdDate:
      typedResponse.results[0].properties["created date"].date?.start ?? "",
    tags: typedResponse.results[0].properties.tags.multi_select.map(
      (tag) => tag.name
    ),
    prototype: typedResponse.results[0].properties.prototipo.url ?? '',
    code: typedResponse.results[0].properties["Code view"].url ?? '',
    deploy: typedResponse.results[0].properties["link deploy"].url ?? '',
    content: mdString.parent,
  };
}

export async function getAllArticles(): Promise<ArticleListItem[]> {
  const databaseId = process.env.NOTION_DATABASE_BLOG_ID as string;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "publicked",
          checkbox: { equals: true },
        },
      ],
    },
    sorts: [
      {
        property: "created date",
        direction: "descending",
      },
    ],
  });

  const typedResponse = response as unknown as NotionDatabaseResponse;
  return typedResponse.results.map((article) => ({
    articleId: article.id,
    name: article.properties.name.title[0]?.text.content,
    description: article.properties.description.rich_text[0]?.text.content,
    slug: article.properties.slug.rich_text[0]?.text.content,
    createdDate: article.properties["created date"].date?.start ?? "",
    tags: article.properties.tags.multi_select.map((tag) => tag.name),
  }));
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const databaseId = process.env.NOTION_DATABASE_BLOG_ID as string;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "publicked",
          checkbox: { equals: true },
        },
      ],
    },
  });

  const typedResponse = response as unknown as NotionDatabaseResponse;
  return typedResponse.results
    .map((article) => article.properties.slug.rich_text[0]?.text.content)
    .filter(Boolean);
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticleDetail | null> {
  const databaseId = process.env.NOTION_DATABASE_BLOG_ID as string;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: { equals: slug },
        },
      ],
    },
  });

  const typedResponse = response as unknown as NotionDatabaseResponse;
  if (!typedResponse.results[0]) return null;

  const pageId = typedResponse.results[0].id;
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    pageId: typedResponse.results[0].id,
    title: typedResponse.results[0].properties.name.title[0]?.text.content,
    cover:
      typedResponse.results[0].properties["Files & media"].files[0]?.file.url ?? '',
    createdDate:
      typedResponse.results[0].properties["created date"].date?.start ?? "",
    tags: typedResponse.results[0].properties.tags.multi_select.map(
      (tag) => tag.name
    ),
    content: mdString.parent,
  };
}
