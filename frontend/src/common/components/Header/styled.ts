import styled, { css } from 'styled-components';

import { NAVBAR_HEIGHT } from 'common/components/Navbar/styled';
import breakpoints from 'common/constants/breakpoints';
import colors from 'common/constants/colors';
import fontFamily from 'common/styles/typography/fontFamily';

const CONTAINER_HEIGHT = '300px';

const TITLE_FONT_SIZE = '40px';
const TITLE_FONT_WEIGHT = '700';

const SUB_TITLE_FONT_SIZE = '32px';

interface ContainerProps {
  $backgroundImage?: string;
}
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

export const Container = styled.div<ContainerProps>`
  height: ${CONTAINER_HEIGHT};
  background-color: ${colors.PRIMARY_COLOR};
  ${({ $backgroundImage }) =>
    $backgroundImage
      ? css`
          background-image: url(${$backgroundImage});
        `
      : ''}
`;

export const Gradient = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #4a60ac 0%, rgba(74, 96, 172, 0) 50%);

  @media (max-width: ${breakpoints.IPAD_PORTRAIT}) {
    background: linear-gradient(180deg, #4a60ac 0%, rgba(74, 96, 172, 0) 232.78%);
  }
`;

export const Content = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: ${breakpoints.IPAD_LANDSCAPE};
  color: white;

  @media (max-width: ${breakpoints.IPAD_PORTRAIT}) {
    align-items: center;
  }
`;

export const Title = styled.div`
  font-family: ${fontFamily.TH};
  font-size: ${TITLE_FONT_SIZE};
  font-weight: ${TITLE_FONT_WEIGHT};
`;

export const Subtitle = styled.div`
  font-family: ${fontFamily.TH};
  font-size: ${SUB_TITLE_FONT_SIZE};
`;
