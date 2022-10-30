import { createSlice } from '@reduxjs/toolkit';

import { MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import { MenuRedcuer } from 'common/redcucers/menu/types';
import { menuMapping } from 'common/utils/menuMapping';

const initState: MenuRedcuer = {
  desktop: [],
  mobile: [],
  footer: [],
  desktopQuickMenu: [],
  mobileQuickMenu: [],
};

export const menuSlice = createSlice({
  name: 'MENUES',
  initialState: initState,
  reducers: {
    fetch: (state, action) => {
      const mapped = menuMapping(action.payload);
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
