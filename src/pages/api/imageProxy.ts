import { notion } from "@/lib/notion";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { pageId } = req.query;

  if (!pageId || typeof pageId !== "string") {
    return res.status(400).json({ error: "pageId is required" });
  }

  try {
    const page: any = await notion.pages.retrieve({ page_id: pageId });

    const files = page.properties?.["Files & media"]?.files;
    const coverUrl = files?.[0]?.file?.url;

    if (!coverUrl) {
      return res.status(404).json({ error: "No cover image found" });
    }

    const imageResponse = await fetch(coverUrl);

    if (!imageResponse.ok) {
      return res.status(502).json({ error: "Failed to fetch image from storage" });
    }

    const contentType = imageResponse.headers.get("content-type") || "image/jpeg";
    const buffer = Buffer.from(await imageResponse.arrayBuffer());

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=3600");
    res.setHeader("Content-Length", buffer.length);
    res.status(200).end(buffer);
  } catch (error) {
    console.error("Image proxy error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
