import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

export const ContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  max-width: ${BREAKPOINTS.IPAD_LANDSCAPE};
  margin: 0 auto;
  padding: 18px;

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    justify-content: space-around;
  }
`;
