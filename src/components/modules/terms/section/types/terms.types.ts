export interface TermItem {
  title: string;
  description: string;
}

export interface TermsHeaderContent {
  title: string;
  description: string;
}

export interface TermsContent {
  header: TermsHeaderContent;
  terms: readonly TermItem[];
}