import React from 'react';

import { ContainerStyled } from './styled';
import { ContainerProps } from './types';

// Example components
const Container: React.FC = ({ children }: ContainerProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
