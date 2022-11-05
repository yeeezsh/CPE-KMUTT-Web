import { MenuItem } from 'common/components/Navbar/components/NavbarMenu/types';
import {
  ComponentCommonMenuConfig,
  GetMenuQuery,
} from 'common/generated/generated-types';
import menuLinkMapper from 'common/utils/menuMapper/menuLinkMapper';
import menuSortAsc from 'common/utils/menuMapper/menuSortAsc';
import menuTypeMapper from 'common/utils/menuMapper/menuTypeMapper';
import { ImageStrapiUrl } from 'common/utils/urls';

export default function menuMapper(data: GetMenuQuery): MenuItem[] {
  const menus = menuSortAsc(data).mainMenus;

  const mappedMenuType: MenuItem[] =
    menus?.map((m) => ({
      key: m?.id || '',
      label: m?.title || '',
      picture: ImageStrapiUrl(m?.thumbnail?.url || ''),
      types: menuTypeMapper(m?.menu_config as ComponentCommonMenuConfig) || [],
      subMenu: m?.menus?.map((s) => ({
        key: s?.id || '',
        label: s?.title || '',
        link: menuLinkMapper(s) || '',
      })),
    })) || [];

  return mappedMenuType;
}
