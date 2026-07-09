export interface TestimonialItem {
  quote: string;
}

export interface TestimonialsHeaderContent {
  title: string;
  description: string;
}

export interface TestimonialsContent {
  header: TestimonialsHeaderContent;

  items: TestimonialItem[];
}

export interface TestimonialsHeaderProps {
  content: TestimonialsHeaderContent;
}

export interface TestimonialsListProps {
  items: TestimonialItem[];

  animationKey: React.Key;
}

export interface TestimonialCardProps {
  item: TestimonialItem;
}