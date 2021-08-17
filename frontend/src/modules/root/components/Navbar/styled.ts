import { Divider } from 'antd';
import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';
import fontFamily from 'common/styles/typography/fontFamily';

import { NavBarProps } from './interface';

export const Nav = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  background: ${(props: NavBarProps) =>
    props.visible ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(70px);
  font-family: ${fontFamily.TH};
  font-style: normal;
  display: flex;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    height: 60px;
  }
`;

export const NavbarBrand = styled.li`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

export const LogoKMUTT = styled.img`
  width: 51px;
  height: 60px;
  margin: 15px 25px 25px 0;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    width: 29px;
    height: 34px;
    margin: 10px 10px 16px 20px;
  }
`;

export const StyledDivider = styled(Divider)`
  height: 50px;
  border-color: #eaeaea;
  margin-top: 25px;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    height: 33px;
    margin-top: 13px;
  }
`;

export const LogoCPE = styled.img`
  width: 80px;
  height: 40px;
  margin: 30px 20px 30px 20px;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    width: 53px;
    height: 26px;
    margin: 17px 0 16px 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    display: none;
  }
`;

export const Faculty = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${COLORS.PRIMARY_COLOR};
  margin-top: 26px;
`;

export const Department = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${COLORS.GRAY_1};
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 30px;
  font-family: ${fontFamily.EN};
  &:hover {
    color: ${COLORS.PRIMARY_COLOR};
  }
  &:focus {
    outline: none;
  }
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    margin-right: 6px;
  }
`;
