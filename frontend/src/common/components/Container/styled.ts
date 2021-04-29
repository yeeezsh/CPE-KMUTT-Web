import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

export const ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  max-width: ${BREAKPOINTS.IPAD_LANDSCAPE};
  margin: 0 auto;
  flex-wrap: wrap;
`;
