import { notion } from "@/lib/notion";
import { NotionDatabaseResponse } from "@/types/notionDatabaseResponse";
import { create } from "domain";
import { NextApiRequest, NextApiResponse } from "next";
import { NotionToMarkdown } from "notion-to-md";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    const body = JSON.parse(req.body);
    const slug = body.slug;
    try {
      const databaseId = process.env.NOTION_DATABASE_BLOG_ID as string;
      const response = await notion.databases.query({ 
        database_id: databaseId,
        filter:{
         or: [
          {
            property: 'slug',
            rich_text: {
              equals: slug
            }
          }
         ]
        }
      });


      const n2m = new NotionToMarkdown({ notionClient: notion });

      const pageId = response.results[0].id;

      const mdblocks = await n2m.pageToMarkdown(pageId);
      const mdString = n2m.toMarkdownString(mdblocks);

       const typedResponse = (response as unknown) as NotionDatabaseResponse;

      return res.status(200).json({
        title: typedResponse.results[0].properties.name.title[0]?.text.content,
        cover: typedResponse.results[0].properties["Files & media"].files[0]?.file.url,
        createdDate: typedResponse.results[0].properties['created date'].date.start,
        tags: typedResponse.results[0].properties.tags.multi_select.map((tag) => tag.name),
        content: mdString.parent,
      })
      
    } catch (error) {
      console.error('Erro ao buscar dados do Notion:', error);
      res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }