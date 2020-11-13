import { MenuOutlined } from '@ant-design/icons';
import NAVBAR_CONSTANT from 'models/Navbar/NavbarConstant';
import React from 'react';
import {
  Department,
  Faculty,
  Item,
  ItemLink,
  Logo,
  LogoCPE,
  LogoKMUTT,
  Menu,
  MenuButton,
  Nav,
  StyledDivider,
} from './styled';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo>
        <LogoKMUTT src="/LOGO-KMUTT.svg" />
        <StyledDivider type="vertical" />
        <LogoCPE src="/LOGO-CPE.svg" />
        <Faculty>
          ภาควิชาวิศวกรรมคอมพิวเตอร์
          <Department>คณะวิศวกรรมศาสตร์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</Department>
        </Faculty>
      </Logo>
      <Menu>
        {NAVBAR_CONSTANT.map(({ key, label, link }) => {
          return (
            <Item key={key}>
              <ItemLink href={link}>{label}</ItemLink>
            </Item>
          );
        })}
        <MenuButton>{<MenuOutlined />}</MenuButton>
      </Menu>
    </Nav>
  );
};

export default Navbar;
