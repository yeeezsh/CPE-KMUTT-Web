import React from 'react';

import Container from 'common/components/Container';

import {
  NewsContentStyle,
  NewsContentHeader,
  NewsContentPostDate,
} from 'modules/news/components/NewsContent/styled';

//TODO: refactor News* styled to common
const ProgramContentPage: React.FC = () => {
  return (
    <NewsContentStyle>
      <Container>
        <NewsContentHeader>title</NewsContentHeader>
        <NewsContentPostDate>date</NewsContentPostDate>
      </Container>
    </NewsContentStyle>
  );
};

export default ProgramContentPage;
