import React from 'react';

import { useRouter } from 'next/router';

import Container from 'common/components/Container';
import { MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import useMenu from 'common/hooks/useMenu';

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

  const menu = useMenu(MenuType.Desktop);
  const quickMenu = useMenu(MenuType.DesktopQuickMenu);

  function onLinkClick(link?: string) {
    link && router.push(link);
  }

  return (
    <MenuWrap>
      <Container>
        <Menu>
          {menu &&
            menu.map(({ key, label, subMenu, picture }) => {
              return (
                <Group key={'group-' + key}>
                  {picture ? (
                    <Image img={picture}>
                      <Mask />
                    </Image>
                  ) : null}
                  <Item>{label}</Item>
                  {subMenu?.map(({ key: itemKey, link, label: subMenuLabel }) => {
                    return (
                      <ItemLink
                        key={key + '-submenu-' + itemKey}
                        onClick={() => onLinkClick(link)}
                        href="#">
                        {subMenuLabel}
                      </ItemLink>
                    );
                  })}
                </Group>
              );
            })}
        </Menu>
        <SubMenu>
          {quickMenu.map(({ key, label, link }) => {
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
