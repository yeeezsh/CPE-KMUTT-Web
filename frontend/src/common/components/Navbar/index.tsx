import React from 'react';

import { Dropdown } from 'antd';
import { useRouter } from 'next/router';

import Container from 'common/components/Container';
import useClickHamburger from 'common/components/Navbar/hooks/useClickHamburger';
import { STATIC_HOME_LINK } from 'common/constants/links';
import useIsMobileNavbarShow from 'common/hooks/useIsMobileMenuOpened';

import { HOME_CONTENTS } from 'modules/home/constants';

import HamburgerButton from './components/HamburgerButton';
import NavbarMenu from './components/NavbarMenu';
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
  const router = useRouter();
  const { menuOpened, desktopMenuOpened, handleClickHamburger } = useClickHamburger();

  function onLogoClick() {
    router.push(STATIC_HOME_LINK);
  }

  const isMobileOpen = useIsMobileNavbarShow();

  return (
    <Nav $visible={menuOpened} $isMobileMenuShow={isMobileOpen}>
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

        {
          //TODO: enable in next patch
        }
        {HOME_CONTENTS.i18n.enable && <MenuButton>{menuOpened ? '' : 'EN'}</MenuButton>}

        <Dropdown
          visible={desktopMenuOpened}
          overlay={<NavbarMenu />}
          placement="bottomCenter"
          trigger={['click']}
          overlayStyle={{
            width: '100%',
            position: 'fixed',
            marginTop: '40px',
          }}>
          <HamburgerButton onClick={handleClickHamburger} visible={menuOpened} />
        </Dropdown>
      </Container>
    </Nav>
  );
};

export default Navbar;
