import type {
  PortfolioProject,
} from "@/types/portfolio.types";

export interface GalleryProps {
  projects: PortfolioProject[];
}

export interface GalleryShowcaseProps {
  projects: PortfolioProject[];
}

export interface FeaturedProjectProps {
  project: PortfolioProject;
}

export interface ProjectInfoProps {
  project: PortfolioProject;
}

export interface ProjectThumbnailProps {
  project: PortfolioProject;

  active: boolean;

  onClick: () => void;
}