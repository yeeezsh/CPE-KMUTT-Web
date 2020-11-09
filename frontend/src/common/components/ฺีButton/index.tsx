import React from 'react';
import { Btn } from './styled';
import { ButtonProps } from './types';

// Example components
const Button: React.FC = ({ children }: ButtonProps) => {
  return <Btn>{children}</Btn>;
};

export default Button;
