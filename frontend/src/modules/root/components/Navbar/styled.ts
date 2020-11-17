import { Divider } from 'antd';
import styled from 'styled-components';
import fontFamily from 'styles/typography/fontFamily';

export const Nav = styled.div`
  width: 100%;
  height: 100px;
  z-index: 1;
  position:fixed
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(70px);
  width: 100%;
  height: 100px;
  font-family: ${fontFamily.Default};
  font-style: normal;
`;

//export const NavElements = styled.div`
//  display: flex;
//  flex-direction: row;
//  flex-wrap: nowrap;
//  justify-content: center;
//  margin: 0 14vw 0 14vw;
//`;

export const UL = styled.ul`
  display: flex;
`;

export const NavbarBrand = styled.li`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

//export const Space = styled.div`
//  display: flex;
//  flex: 29%;
//`;

//export const NavbarButtons = styled.div`
//  display: flex;
//  justify-content: flex-end;
//`;

export const LogoKMUTT = styled.img`
  width: 51px;
  height: 60px;
  margin: 15px 25px 25px 0;
  @media (max-width: 750px) {
    margin: 15px 5px 25px 0;
  }
`;

export const StyledDivider = styled(Divider)`
  height: 50px;
  border-color: #eaeaea;
  margin-top: 25px;
`;

export const LogoCPE = styled.img`
  width: 80px;
  height: 40px;
  margin: 30px 20px 30px 20px;
  @media (max-width: 750px) {
    margin: 30px 4px 25px 4px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const Faculty = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #4a60ac;
  margin-top: 26px;
`;

export const Department = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #373736;
`;

export const MenuButton = styled.button`
  margin-right: 30px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #80a8d9;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 750px) {
    margin-right: 6px;
  }
`;
