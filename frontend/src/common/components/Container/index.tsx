import React from 'react';

import { ContainerStyled } from './styled';
import { ContainerProps } from './types';

const Container: React.FC = ({ children, ...props }: ContainerProps) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>;
};

export default Container;
