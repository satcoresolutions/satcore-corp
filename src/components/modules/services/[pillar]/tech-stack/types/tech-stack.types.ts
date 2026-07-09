export interface TechStackItem {
  name: string;

  icon: string;
}

export interface TechStackHeaderProps {
  title: string;

  description: string;
}

export interface TechStackItemProps {
  technology: string;
}

export interface TechStackMarqueeProps {
  technologies: string[];
}

export interface TechStackProps {
  title: string;

  description: string;

  technologies: string[];
}