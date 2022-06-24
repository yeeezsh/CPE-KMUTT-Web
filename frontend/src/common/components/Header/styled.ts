import styled from 'styled-components';

import fontFamily from 'common/styles/typography/fontFamily';

import { NAVBAR_HEIGHT } from 'modules/root/components/Navbar/styled';

export const HeaderContainer = styled.div`
  margin-top: ${NAVBAR_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 52px 0;
  background-image: url('/images/about-us-banner.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  position: relative;
`;

export const FadeBlue = styled.div`
  background: linear-gradient(90deg, #4a60ac 70%, rgba(74, 96, 172, 0) 100%);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const HeaderTeaxt = styled.div`
  z-index: 10;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  font-family: ${fontFamily.TH};
`;
