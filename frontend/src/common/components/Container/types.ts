import { ComponentPropsWithRef } from 'react';

export interface ContainerProps extends ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
}
