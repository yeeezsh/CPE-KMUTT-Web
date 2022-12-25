import styled from 'styled-components';

import colors from 'common/constants/colors';

export const Button = styled.div`
  margin: 32px 0;
`;

export const Content = styled.div`
  color: ${colors.GRAY_2};
  font-size: 14px;
`;

export const Header = styled.div`
  color: ${colors.GRAY_1};
  font-weight: bold;
  font-size: 22px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  display: block;

  img {
    width: 48vw;
  }
`;
