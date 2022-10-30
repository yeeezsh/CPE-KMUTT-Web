import React, { useState } from 'react';

import { Menu, MenuProps } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import Link from 'next/link';

import {
  NAVBAR_MENU,
  NAVBAR_SECONDARY_MENU,
} from 'common/components/Navbar/components/NavbarMenu/constants';
import { MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import useIsMobileMenuOpened from 'common/hooks/useIsMobileMenuOpened';
import useMenu from 'common/hooks/useMenu';
import useMobileMenu from 'common/hooks/useMobileMenu';

import { Container, StyledMenu } from './styled';

const MobileNavbar = (): JSX.Element => {
  const { closeMobileMenu } = useMobileMenu();
  const [currentSelect, setCurrentSelect] = useState('1');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrentSelect(e.key);
    closeMobileMenu();
  };

  const isMobileMenuOpened = useIsMobileMenuOpened();
  const menu = useMenu(MenuType.Mobile);
  const quickMenu = useMenu(MenuType.MobileQuickMenu);

  return (
    <Container $isShow={isMobileMenuOpened}>
      <StyledMenu
        defaultOpenKeys={['sub1']}
        selectedKeys={[currentSelect]}
        onClick={onClick}
        mode="inline">
        {menu.map(({ key, label, subMenu }) => {
          return (
            <SubMenu key={key} title={label}>
              {subMenu?.map(({ key: itemKey, label: itemLabel, link }) => {
                return (
                  <Menu.Item key={`${key}-${itemKey}`}>
                    <Link href={link || '#'}>{itemLabel}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
        {quickMenu.map(({ key, label, link }) => {
          return (
            <Menu.Item key={key} title={label}>
              <Link href={link || '#'}>{label}</Link>
            </Menu.Item>
          );
        })}
      </StyledMenu>
    </Container>
  );
};

export default MobileNavbar;
