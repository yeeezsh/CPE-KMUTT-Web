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
}

export interface CardConstantsProps {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  links?: string;
  variant?: CardVariant;
}
