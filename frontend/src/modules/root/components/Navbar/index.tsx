import { Dropdown } from 'antd';
import Container from 'common/components/Container';
import React, { useState } from 'react';
import NavbarMenu from './components/NavbarMenu';
import { NavBarProps } from './interface';
import {
  Department,
  Faculty,
  IconStyle,
  LogoCPE,
  LogoKMUTT,
  MenuButton,
  Nav,
  NavbarBrand,
  StyledDivider,
  Wrapper,
} from './styled';

const Navbar: React.FC<NavBarProps> = () => {
  const [visible, setVisible] = useState(false);

  const showDropdown = () => setVisible((value) => !value);

  return (
    <Container>
      <IconStyle />
      <Nav>
        <NavbarBrand>
          <LogoKMUTT src="/assets/LOGO-KMUTT.svg" />
          <StyledDivider type="vertical" />
          <LogoCPE src="/assets/LOGO-CPE.svg" />
          <Wrapper>
            <Faculty>ภาควิชาวิศวกรรมคอมพิวเตอร์</Faculty>
            <Department>
              คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            </Department>
          </Wrapper>
        </NavbarBrand>

        <MenuButton> {visible ? '​​' : 'EN'}</MenuButton>
        <Dropdown
          visible={visible}
          overlay={NavbarMenu}
          placement="bottomCenter"
          onVisibleChange={showDropdown}
          trigger={['click']}
          overlayStyle={{
            width: '100%',
            position: 'fixed',
            marginTop: '40px',
          }}>
          <MenuButton>
            {visible ? (
              <svg
                className="svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2.1268L12.59 0.821045L7 5.99777L1.41 0.821045L0 2.1268L5.59 7.30353L0 12.4803L1.41 13.786L7 8.60929L12.59 13.786L14 12.4803L8.41 7.30353L14 2.1268Z" />
              </svg>
            ) : (
              <svg
                className="svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" />
              </svg>
            )}
          </MenuButton>
        </Dropdown>
      </Nav>
    </Container>
  );
};

export default Navbar;
