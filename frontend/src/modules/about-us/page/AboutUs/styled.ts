import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

export const AboutUsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${BREAKPOINTS.IPAD_LANDSCAPE};
  margin: 0 auto;
  justify-content: space-between;
  padding: 48px 0;
`;
