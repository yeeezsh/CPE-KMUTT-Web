import BREAKPOINTS from 'common/constants/breakpoints';
import styled from 'styled-components';

export const Containers = styled.div`
  display: flex;
  width: 100%;
  max-width: ${BREAKPOINTS.IPAD_LANDSCAPE};
  margin: 0 auto;
  flex-wrap: wrap;
`;
