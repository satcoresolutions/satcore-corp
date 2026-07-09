export interface UseCaseItem {
  title: string;

  description: string;
}

export interface UseCasesData {
  title: string;

  description: string;

  useCases: UseCaseItem[];
}

export interface UseCasesProps {
  useCases: UseCasesData;
}

export interface UseCaseGridProps {
  useCases: UseCaseItem[];
}

export interface UseCaseCardProps {
  useCase: UseCaseItem;
}