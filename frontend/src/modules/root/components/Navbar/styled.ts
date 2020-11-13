import { Divider } from 'antd';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  background-filter: blur(70px);
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-between;
  font-family: Sukhumvit Set;
  font-style: normal;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const LogoKMUTT = styled.img`
  width: 51px;
  height: 60px;
  margin: 15px 25px 25px 100px;
`;

export const StyledDivider = styled(Divider)`
  height: 50px;
  border: 1px solid #eaeaea;
  margin-top: 25px;
`;

export const LogoCPE = styled.img`
  width: 80px;
  height: 40px;
  margin: 30px 20px 30px 20px;
`;

export const Faculty = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 18px;
  line-height: 29px;
  color: #4a60ac;
  margin-top: 26px;
  positon: relative;
`;

export const Department = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #373736;
  position: absolute;
  margin-top: 24.55px;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  list-style: none;
  margin-top: 15px;
  margin-left: 243px;
`;

export const Item = styled.li`
  padding-right: 40px;
  padding-top: 24px;
  list-style: none;
`;

export const ItemLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  color: #373736;
  &:hover {
    color: #80a8d9;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #80a8d9;
  }
`;
