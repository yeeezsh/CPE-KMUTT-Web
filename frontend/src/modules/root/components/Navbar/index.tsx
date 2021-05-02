import React from 'react';

import { Dropdown } from 'antd';

import Container from 'common/components/Container';

import HamburgerButton from './components/HamburgerButton';
import NavbarMenu from './components/NavbarMenu';
import useDropdown from './hooks/useDropdown';
import {
  Department,
  Faculty,
  LogoCPE,
  LogoKMUTT,
  MenuButton,
  Nav,
  NavbarBrand,
  StyledDivider,
  Wrapper,
} from './styled';

const Navbar: React.FC = () => {
  const { visible, showDropdown } = useDropdown();

  return (
    <Nav visible={visible}>
      <Container>
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

        <MenuButton>{visible ? '' : 'EN'}</MenuButton>
        <Dropdown
          visible={visible}
          overlay={<NavbarMenu />}
          placement="bottomCenter"
          trigger={['click']}
          overlayStyle={{
            width: '100%',
            position: 'fixed',
            marginTop: '40px',
          }}>
          <HamburgerButton onClick={showDropdown} visible={visible} />
        </Dropdown>
      </Container>
    </Nav>
  );
};

export default Navbar;
