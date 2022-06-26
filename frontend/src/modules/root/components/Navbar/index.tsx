import React from 'react';

import { Dropdown } from 'antd';
import { useRouter } from 'next/router';

import Container from 'common/components/Container';
import { STATIC_HOME_LINK } from 'common/constants/links';

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
  const rouetr = useRouter();
  const { visible, showDropdown } = useDropdown();

  function onLogoClick() {
    rouetr.push(STATIC_HOME_LINK);
  }

  return (
    <Nav visible={visible}>
      <Container>
        <NavbarBrand>
          <LogoKMUTT onClick={onLogoClick} src="/assets/LOGO-KMUTT.svg" />
          <StyledDivider type="vertical" />
          <LogoCPE onClick={onLogoClick} src="/assets/LOGO-CPE.svg" />
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
