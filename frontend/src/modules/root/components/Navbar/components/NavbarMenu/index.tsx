import React from 'react';

import Container from 'common/components/Container';

import { NAVBAR_MENU, NAVBAR_SUB_MENU } from './constants';
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
                {subMenu?.map(({ key: itemKey, label: ItemLabel, link }) => {
                  return (
                    <ItemLink key={key + '-submenu-' + itemKey} href={link}>
                      {label}
                    </ItemLink>
                  );
                })}
              </Group>
            );
          })}
        </Menu>
        <SubMenu>
          {NAVBAR_SUB_MENU.map(({ key, label }) => {
            return <SubMenuItem key={key}>{label}</SubMenuItem>;
          })}
        </SubMenu>
      </Container>
    </MenuWrap>
  );
};

export default NavbarMenu;
