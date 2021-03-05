import React from 'react';

import { Btn } from './styled';
import { ButtonProps } from './types';

// Example components
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;
