export interface CrumbProps {
  link: string;
  title: string;
}

export interface CommonLayoutProps {
  children: React.ReactNode;
  header?: string;
  navigate?: CrumbProps[];
  withFaqBanner?: boolean;
  headerBackgroundImage?: string;
}
