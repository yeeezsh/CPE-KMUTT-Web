import Container from 'common/components/Container';
import React from 'react';
import { StaticStyle } from './styled';
import { StaticProps } from './types';

const StaticSection: React.FC<StaticProps> = ({ children, ...props }) => {
  return (
    <StaticStyle style={{ backgroundImage: `url(${props.background})` }}>
      <Container>{children}</Container>
    </StaticStyle>
  );
};

export default StaticSection;
