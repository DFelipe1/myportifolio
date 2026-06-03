import { NextApiRequest, NextApiResponse } from "next";
import { getAllArticles } from "@/lib/notionHelpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = await getAllArticles();
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao buscar dados do Notion:', error);
        res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }
