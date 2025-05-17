import { notion } from "@/lib/notion";
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    try {
      const databaseId = process.env.NOTION_DATABASE_ID as string; // Ensure this is set in your environment variables
      const response = await notion.databases.query({ database_id: databaseId });
      
      const data = (response.results as PageObjectResponse[]).map((page) => ({
        id: page.id,
        title: (page.properties['title'] as any).title[0]?.text.content ?? '',
        description: (page.properties['Text'] as any).rich_text[0]?.text.content ?? '',
        site: (page.properties['site'] as any).url ?? '',
        image: (page.properties['Files & media'] as any).files[0]?.file.url ?? '',
      }));

      res.status(200).json(data);
    } catch (error) {
      console.error('Erro ao buscar dados do Notion:', error);
      res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }