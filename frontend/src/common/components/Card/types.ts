interface Card {
  picture?: string;
  title?: string;
  description?: string;
  date?: string;
  links?: string;
  primary?: boolean;
}

export interface CardProps extends Partial<Card> {
  id: string;
}
