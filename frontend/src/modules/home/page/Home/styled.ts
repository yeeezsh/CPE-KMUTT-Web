import styled from 'styled-components';

import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from 'common/components/Navbar/styled';
import BREAKPOINTS from 'common/constants/breakpoints';

export const Main = styled.main`
  margin-top: ${NAVBAR_HEIGHT};
  background-color: #fafafa;
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    margin-top: ${NAVBAR_HEIGHT_MOBILE};
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  background-color: #fafafa;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;
