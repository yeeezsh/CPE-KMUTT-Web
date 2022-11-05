import { useSelector } from 'react-redux';

import { MenuItem, MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import { StoresState } from 'common/stores';

const useMenu = (menuType: MenuType): MenuItem[] => {
  switch (menuType) {
    case MenuType.Desktop:
      return useSelector((s: StoresState) => s.menu.desktop);
    case MenuType.Mobile:
      return useSelector((s: StoresState) => s.menu.mobile);
    case MenuType.Footer:
      return useSelector((s: StoresState) => s.menu.footer);
    case MenuType.DesktopQuickMenu:
      return useSelector((s: StoresState) => s.menu.desktopQuickMenu);
    case MenuType.MobileQuickMenu:
      return useSelector((s: StoresState) => s.menu.mobileQuickMenu);
  }

  console.warn('cannot match selector');
  console.warn(menuType);
  return [];
};

export default useMenu;
