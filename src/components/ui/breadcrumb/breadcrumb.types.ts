export interface BreadcrumbItemData {
  label: string;

  href: string;

  isLast: boolean;
}

export interface BreadcrumbProps {
  currentLabel?: string;

  className?: string;
}

export interface BreadcrumbItemProps {
  item: BreadcrumbItemData;
}