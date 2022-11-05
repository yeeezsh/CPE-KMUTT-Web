import { createSlice } from '@reduxjs/toolkit';

import {
  NAVBAR_MENU,
  STAFF,
} from 'common/components/Navbar/components/NavbarMenu/constants';
import { MenuItem, MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import { MenuRedcuer } from 'common/redcucers/menu/types';
import { menuMapper } from 'common/utils/menuMapper';

const initState: MenuRedcuer = {
  desktop: NAVBAR_MENU,
  mobile: NAVBAR_MENU,
  footer: NAVBAR_MENU,
  desktopQuickMenu: STAFF.slice(0, 3) as MenuItem[],
  mobileQuickMenu: STAFF.slice(0, 3) as MenuItem[],
};

export const menuSlice = createSlice({
  name: 'MENUES',
  initialState: initState,
  reducers: {
    fetch: (state, action) => {
      const mapped = menuMapper(action.payload);
      return {
        ...state,
        desktop: mapped.filter((m) => m.types.includes(MenuType.Desktop)),
        mobile: mapped.filter((m) => m.types.includes(MenuType.Mobile)),
        footer: mapped.filter((m) => m.types.includes(MenuType.Footer)),
        desktopQuickMenu: mapped.filter((m) =>
          m.types.includes(MenuType.DesktopQuickMenu),
        ),
        mobileQuickMenu: mapped.filter((m) => m.types.includes(MenuType.MobileQuickMenu)),
      };
    },
  },
});

export default menuSlice.reducer;
export const menuAction = menuSlice.actions;
