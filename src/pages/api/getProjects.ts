import { notion } from "@/lib/notion";
import { NotionDatabaseResponse } from "@/types/notionDatabaseResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const databaseId = process.env.NOTION_DATABASE_ID as string; // Ensure this is set in your environment variables
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
      
      const data = typedResponse.results.map((project) => (
        {
          projectId: project.id,
          name: project.properties.name.title[0]?.text.content,
          description: project.properties.description.rich_text[0]?.text.content,
          slug: project.properties.slug.rich_text[0]?.text.content,
          createdDate: project.properties['created date'].date?.start ?? '',
          tags: project.properties.tags.multi_select.map((tag) => tag.name),
        }
      ));

      res.status(200).json(data);
    } catch (error) {
      console.error('Erro ao buscar dados do Notion:', error);
      res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }