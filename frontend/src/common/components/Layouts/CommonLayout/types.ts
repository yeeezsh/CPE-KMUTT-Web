import { ReactNode } from 'react';

export interface CrumbProps {
  link: string;
  title: string;
}

export interface CommonLayoutProps {
  children: ReactNode;
  Header?: ReactNode;
  header?: string;
  navigate?: CrumbProps[];
  withFaqBanner?: boolean;
  headerBackgroundImage?: string;
}
