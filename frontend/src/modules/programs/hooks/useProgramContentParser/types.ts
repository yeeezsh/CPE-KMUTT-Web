import { CardNewsConnectionProps } from 'modules/news/components/NewsContent/types';

export type UseProgramContentParser = {
  title: string | undefined;
  thumbnail: string | undefined;
  postDate: string;
  contents: JSX.Element[] | undefined;
  download?: { title?: string; link?: string }[];
  connections?: CardNewsConnectionProps[];
};
