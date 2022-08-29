import { ReactNode } from 'react';

export type HeadingVariant = 'h1' | 'h2';

export interface HeadingProps {
  variant: HeadingVariant;
  color?: string;
  className?: string;
  children: ReactNode;
}
