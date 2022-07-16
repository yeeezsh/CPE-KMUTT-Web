import styled from 'styled-components';

import colors from 'common/constants/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding-top: 32px;
`;

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
  align-items: center;
`;

export const Column = styled.div`
  display: block;
`;
