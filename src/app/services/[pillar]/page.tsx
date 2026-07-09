import PillarContent from "@/components/modules/services/[pillar]/PillarContent";

import type {
  PillarSlug,
} from "@/types/common.types";


interface PageProps {
  params: Promise<{
    pillar: PillarSlug;
  }>;
}


export default async function ServicesPillarPage({
  params,
}: PageProps) {

  const {
    pillar,
  } = await params;


  return (
    <PillarContent
      slug={pillar}
    />
  );
}