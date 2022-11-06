import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

const CardsLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  justify-content: space-between;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    flex-direction: column;
    gap: 0.5em;
  }
  @media (min-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    margin-bottom: 105px;
    gap: 0.5em;
  }
`;

export default CardsLayout;
