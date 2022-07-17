import styled from 'styled-components';

import colors from 'common/constants/colors';

export const Container = styled.div`
  display: flex;
  color: ${colors.PRIMARY_COLOR};
  align-items: center;
  gap: 16px;
  width: 100%;

  a {
    font-size: 30px;
    display: flex;
    align-items: center;
    color: unset;
  }

  h2 {
    margin: auto;
  }
`;
