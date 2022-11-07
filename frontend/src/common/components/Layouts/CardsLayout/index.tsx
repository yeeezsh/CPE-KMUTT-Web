import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

const CardsLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75em;

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    display: flex;
    flex-wrap: wrap;
    gap: 0em;
  }
`;

export default CardsLayout;
