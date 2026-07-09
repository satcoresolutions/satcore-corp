export interface ProcessStep {
  title: string;

  description: string;
}

export interface ProcessProps {
  steps: ProcessStep[];
}

export interface ProcessHeaderProps {
  title: string;

  description: string;
}

export interface ProcessCardProps {
  step: ProcessStep;

  index: number;
}