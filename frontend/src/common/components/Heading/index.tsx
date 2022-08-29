import React from 'react';

import { HEADING_MAPPER } from './styled';
import { HeadingProps } from './types';

const Heading: React.FC<HeadingProps> = ({ variant, color, children, ...props }) => {
  const Heading = HEADING_MAPPER[variant];

  return (
    <Heading $color={color} {...props}>
      {children}
    </Heading>
  );
};

export default Heading;
