export type HeaderVariant = '1-col' | '2-col';

export interface HeaderProps {
  title: string;
  variant: HeaderVariant;
  subtitle?: string;
  backgroundImage?: string;
}
