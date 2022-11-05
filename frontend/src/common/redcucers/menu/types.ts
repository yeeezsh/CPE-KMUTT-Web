import { PayloadAction } from '@reduxjs/toolkit';

import { MenuItem } from 'common/components/Navbar/components/NavbarMenu/types';

export type MenuRedcuer = {
  desktop: MenuItem[];
  mobile: MenuItem[];
  footer: MenuItem[];
  desktopQuickMenu: MenuItem[];
  mobileQuickMenu: MenuItem[];
};

export type FetchMenu = PayloadAction<MenuRedcuer>;
