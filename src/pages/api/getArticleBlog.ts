import { notion } from "@/lib/notion";
import { NotionDatabaseResponse } from "@/types/notionDatabaseResponse";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    try {
        const databaseId = process.env.NOTION_DATABASE_BLOG_ID as string; 
        const response = await notion.databases.query({ 
            database_id: databaseId,
            filter:{
                or: [
                    {
                        property: 'publicked',
                        checkbox: {
                            equals: true
                        }
                    }
                ]
            }
        });

        const typedResponse = (response as unknown) as NotionDatabaseResponse;

        res.status(200).json(response);
    } catch (error) {
        console.error('Erro ao buscar dados do Notion:', error);
        res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }