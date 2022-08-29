import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

export const NavigationMapBody = styled.div`
  background-color: #f5f5f5;
  font-family: 'Kanit', sans-serif;
`;

export const NavigationMapContainer = styled.div`
  max-width: ${BREAKPOINTS.IPAD_LANDSCAPE};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;
