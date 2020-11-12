import styled from 'styled-components';
import { default as VARIABLES } from '../../utils';

export const Containers = styled.div`
  display: flex;
  width: 100%;
  max-width: ${VARIABLES.BREAKPOINTS.IPAD_LANDSCAPE};
  margin: 0 auto;
  flex-wrap: wrap;
`;
