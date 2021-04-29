import React from 'react';

import Container from 'common/components/Container';

import { StaticStyle, StaticBody, StaticContent, StaticHeader } from './styled';
import { StaticProps } from './types';

const StaticSection: React.FC<StaticProps> = ({ children, ...props }) => {
  return (
    <StaticStyle style={{ backgroundImage: `url(${props.background})` }}>
      <Container>
        <StaticBody>
          <StaticHeader>{props.header}</StaticHeader>
          <StaticContent>{props.content}</StaticContent>
          {children}
        </StaticBody>
      </Container>
    </StaticStyle>
  );
};

export default StaticSection;
