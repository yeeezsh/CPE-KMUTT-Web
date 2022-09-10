import { ReactNode } from 'react';

export interface CrumbProps {
  link: string;
  title: string;
}

export interface CommonLayoutProps {
  children: ReactNode;
  Header?: ReactNode;
  showTopBar?: boolean;
  header?: string;
  navigate?: CrumbProps[];
  withFaqBanner?: boolean;
  headerBackgroundImage?: string;
}
