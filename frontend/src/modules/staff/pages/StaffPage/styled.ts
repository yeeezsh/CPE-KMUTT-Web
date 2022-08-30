import styled from 'styled-components';

import Container from 'common/components/Container';

export const StyledContainer = styled(Container)`
  gap: 30px;
  padding-top: 40px;
  padding-bottom: 40px;

  > :first-child {
    margin-bottom: 10px;
  }
`;
