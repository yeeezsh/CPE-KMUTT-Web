interface Card {
  picture?: string;
  title?: string;
  description?: string;
  date?: string;
  links?: string;
  variant?: string;
}

export interface CardProps extends Partial<Card> {
  id: string;
}
