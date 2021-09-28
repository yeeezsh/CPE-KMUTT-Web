interface Card {
  picture?: string;
  title?: string;
  description?: string;
  date?: string;
  links?: string;
  variant?: CardVariant;
}

export interface CardProps extends Partial<Card> {
  id: string;
}

export enum CardVariant {
  normal = 'normal',
  primary = 'primary',
}
