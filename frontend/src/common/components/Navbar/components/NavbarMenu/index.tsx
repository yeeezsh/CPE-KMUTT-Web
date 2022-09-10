import React from 'react';

import { useRouter } from 'next/router';

import Container from 'common/components/Container';

import { NAVBAR_MENU, NAVBAR_SECONDARY_MENU } from './constants';
import {
  Group,
  Image,
  Item,
  ItemLink,
  Mask,
  Menu,
  MenuWrap,
  SubMenu,
  SubMenuItem,
} from './styled';

const NavbarMenu: React.FC = () => {
  const router = useRouter();

  function onLinkClick(link?: string) {
    link && router.push(link);
  }

  return (
    <MenuWrap>
      <Container>
        <Menu>
          {NAVBAR_MENU.map(({ key, label, subMenu, picture }) => {
            return (
              <Group key={key}>
                {picture ? (
                  <Image img={picture}>
                    <Mask />
                  </Image>
                ) : null}
                <Item>{label}</Item>
                {subMenu?.map(({ key: itemKey, link }) => {
                  return (
                    <ItemLink
                      key={key + '-submenu-' + itemKey}
                      onClick={() => onLinkClick(link)}
                      href="#">
                      {label}
                    </ItemLink>
                  );
                })}
              </Group>
            );
          })}
        </Menu>
        <SubMenu>
          {NAVBAR_SECONDARY_MENU.map(({ key, label, link }) => {
            return (
              <SubMenuItem key={key} onClick={() => onLinkClick(link)}>
                {label}
              </SubMenuItem>
            );
          })}
        </SubMenu>
      </Container>
    </MenuWrap>
  );
};

export default NavbarMenu;
