import NAVBAR_CONSTANT from 'models/Navbar/NavbarConstant';
import React from 'react';
import { Group, Item, ItemLink, Menu } from './styled';

const NavbarMenu = (
  <Menu>
    {NAVBAR_CONSTANT.map(({ key, label, subMenu }) => {
      return (
        <Group key={key}>
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
);

export default NavbarMenu;
