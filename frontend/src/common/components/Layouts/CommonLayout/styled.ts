import styled, { css } from 'styled-components';

import { MOBILE_MENU_MAX_WIDTH } from 'common/components/MobileNavbar/constants';
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from 'common/components/Navbar/styled';
import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';

interface MainProps {
  $isMobileMenuShow: boolean;
}

interface CommonWrapperHeaderProps {
  $backgroundImage: string;
}

export const Wrapper = styled.div``;

export const Main = styled.main<MainProps>`
  display: block;
  font-family: 'Kanit', sans-serif;
  background-color: #fafafa;
  width: 100%;
  margin: auto;
  margin-top: ${NAVBAR_HEIGHT};
  transition: transform 0.3s;

  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    margin-top: ${NAVBAR_HEIGHT_MOBILE};
  }

  ${({ $isMobileMenuShow }) =>
    $isMobileMenuShow
      ? css`
          transform: translateX(-${MOBILE_MENU_MAX_WIDTH});
        `
      : ''}

  .ant-breadcrumb {
    display: flex;
    padding: 10px;
  }

  .ant-breadcrumb > span:last-child a {
    color: ${COLORS.GRAY_2};
    font-weight: bold;
  }
`;

export const CommonWrapperHeader = styled.div<CommonWrapperHeaderProps>`
  background-repeat: no-repeat;
  background-position: right;
  background-image: ${(props) => `url(${props.$backgroundImage});`};
  height: 150px;
  display: block;
`;

export const CommonWrapperCanvas = styled.div`
  background: linear-gradient(90deg, #4a60ac 60%, rgba(74, 96, 172, 0) 100%);
  height: 150px;
`;

export const CommonWrapperRow = styled.div`
  display: flex;
  align-items: center;
  &.center {
    justify-content: center;
  }

  &.space-between {
    justify-content: space-between;
    width: 100%;
    margin: 8px 0;
  }
`;

export const CommonWrapperHeaderContent = styled.div`
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 150px;
`;

export const CommonWrapperSocial = styled.div`
  color: ${COLORS.GRAY_2};
  font-size: 12px;
  a {
    display: flex;
  }
`;
