import { notion } from "@/lib/notion";
import { NotionDatabaseResponse } from "@/types/notionDatabaseResponse";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    try {
        const databaseId = process.env.NOTION_DATABASE_BLOG_ID as string; 
        const response = await notion.databases.query({ 
            database_id: databaseId,
            // filter:{
            //     or: [
            //         {
            //             property: 'publicked',
            //             checkbox: {
            //                 equals: true
            //             }
            //         }
            //     ],
            // },
            sorts: [
                {
                    property: 'created date',
                    direction: 'ascending',
                },
            ],
        });

        const typedResponse = (response as unknown) as NotionDatabaseResponse;
         const data = typedResponse.results.map((article) => (
        {
          articleId: article.id,
          name: article.properties.name.title[0]?.text.content,
          description: article.properties.description.rich_text[0]?.text.content,
          slug: article.properties.slug.rich_text[0]?.text.content,
          createdDate: article.properties['created date'].date.start,
          tags: article.properties.tags.multi_select.map((tag) => tag.name),
        }
      ));

        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao buscar dados do Notion:', error);
        res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }