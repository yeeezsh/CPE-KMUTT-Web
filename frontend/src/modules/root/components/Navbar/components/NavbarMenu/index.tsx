import { Divider } from 'antd';
import Container from 'common/components/Container';
import { NAVBAR_MENU, NAVBAR_SUB_MENU } from 'modules/root/components/Navbar/constants';
import React from 'react';
import {
  BorderTop,
  Group,
  Image,
  Item,
  ItemLink,
  Mask,
  Menu,
  SubMenu,
  SubMenuItem,
} from './styled';

const NavbarMenu: JSX.Element = (
  <>
    <BorderTop />
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
              {subMenu?.map(({ key, label, link }) => {
                return (
                  <Item key={key}>
                    <ItemLink href={link}>{label}</ItemLink>
                  </Item>
                );
              })}
            </Group>
          );
        })}
      </Menu>
      <Divider />
      <SubMenu>
        {NAVBAR_SUB_MENU.map(({ key, label }) => {
          return <SubMenuItem key={key}>{label}</SubMenuItem>;
        })}
      </SubMenu>
    </Container>
  </>
);

export default NavbarMenu;
