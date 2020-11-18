import React from 'react';
import { Containers } from './styled';
import { ContainerProps } from './types';

// Example components
const Container: React.FC = ({ children }: ContainerProps) => {
  return <Containers>{children}</Containers>;
};

export default Container;
