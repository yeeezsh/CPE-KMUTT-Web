import styled from 'styled-components';

import Container from 'common/components/Container';

const CONTENT_GAP = '21px';

export const StyledContainer = styled(Container)`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${CONTENT_GAP};
`;
