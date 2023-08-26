import { CardVariant } from 'common/components/Card/types';

export interface NewsContentProps {
  id?: string;
  tumbnail?: string;
  content?: string;
  title?: string;
  postDate?: string;
  file?: {
    title?: string;
    link?: string;
  }[];
  contents?: JSX.Element[];
  connections?: CardNewsConnectionProps[];
  seeAllButton?: {
    title: string;
    url: string;
  };
}

export interface CardNewsConnectionProps {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  thumbnail?: string;
  variant?: CardVariant;
}
