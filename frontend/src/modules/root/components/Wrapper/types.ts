interface CrumbProps {
  link: string;
  title: string;
}

export interface WrapperProps {
  children: React.ReactNode;
  header?: string;
  navigate?: CrumbProps[];
}
