import { notion } from "@/lib/notion";
import { NextApiRequest, NextApiResponse } from "next";
import { NotionToMarkdown } from "notion-to-md";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    const body = JSON.parse(req.body);
    const slug = body.slug;
    try {
      const databaseId = process.env.NOTION_DATABASE_ID as string;
      const response = await notion.databases.query({ 
        database_id: databaseId,
        filter:{
         or: [
          {
            property: 'title',
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
      console.log(mdString.parent);

      return res.status(200).json({
        id: response.results[0].id,
        title: response.results[0].properties.title.title[0]?.text.content,
        content: mdString.parent,
      })
      
    } catch (error) {
      console.error('Erro ao buscar dados do Notion:', error);
      res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }