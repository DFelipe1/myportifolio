import { useState } from "react";
import { Cover } from "@/styles/Project";
import { Skeleton } from "@/components/Skeleton";

interface CoverWithRefreshProps {
  pageId: string;
  alt: string;
}

export default function CoverWithRefresh({ pageId, alt }: CoverWithRefreshProps) {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <Cover src="/images/placeholder.svg" alt={alt} />;
  }

  return (
    <>
      {loading && <Skeleton css={{ width: "100%", height: 300, borderRadius: "$md", marginBottom: "$2" }} />}
      <Cover
        src={`/api/imageProxy?pageId=${pageId}`}
        alt={alt}
        css={{ display: loading ? "none" : "block" }}
        onLoad={() => setLoading(false)}
        onError={() => { setLoading(false); setFailed(true); }}
      />
    </>
  );
}
