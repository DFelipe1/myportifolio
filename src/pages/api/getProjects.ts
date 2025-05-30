import { notion } from "@/lib/notion";
import { NotionDatabaseResponse } from "@/types/notionDatabaseResponse";
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { create } from "domain";
import { NextApiRequest, NextApiResponse } from "next";
import { describe } from "node:test";


// type Project = {
//   projectId: string;
//   name: string
//   publicked: boolean,
//   description: string,
//   slug: { id: 'K%3B%3B%5D', type: 'rich_text', rich_text: [Array] },
//   'Files & media': { id: 'K~Og', type: 'files', files: [Array] },
//   prototipo: { id: 'R%5BuD', type: 'url', url: null },
//   'Code view': {
//     id: 'Rxyd',
//     type: 'url',
//     url: 'https://github.com/DFelipe1/RelogioWeb'
//   },
//   'link deploy': {
//     id: 'muZI',
//     type: 'url',
//     url: 'https://relogio-acs3rbc5j-dfelipe1.vercel.app'
//   },
//   'created date': { id: 'n%7Dfh', type: 'date', date: [Object] },
//   url: 'https://www.notion.so/Rel-gio-Web-1f53e8e5b7ae80e2b39deb04d0539986',
//   public_url: null
//   }


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
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
          describetion: project.properties.description.rich_text[0]?.text.content,
          slug: project.properties.slug.rich_text[0]?.text.content,
          createdDate: project.properties['created date'].date.start,
          tags: project.properties.tags.multi_select.map((tag) => tag.name),
        }
      ));

      res.status(200).json(data);
    } catch (error) {
      console.error('Erro ao buscar dados do Notion:', error);
      res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }