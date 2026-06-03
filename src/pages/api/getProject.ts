import { NextApiRequest, NextApiResponse } from "next";
import { getProjectBySlug } from "@/lib/notionHelpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = JSON.parse(req.body);
    const slug = body.slug;

    try {
      const project = await getProjectBySlug(slug);
      if (!project) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      res.status(200).json(project);
    } catch (error) {
      console.error('Erro ao buscar dados do Notion:', error);
      res.status(500).json({ error: 'Erro ao buscar dados do Notion' });
    }
  }
