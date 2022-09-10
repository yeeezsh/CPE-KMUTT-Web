import { useContext } from 'react';

import { NavbarContext } from 'common/contexts/navbarContext';

export default function useIsMobileMenuOpened(): boolean {
  const { isMobileMenuOpened: isMobileOpen } = useContext(NavbarContext);

  return isMobileOpen;
}
