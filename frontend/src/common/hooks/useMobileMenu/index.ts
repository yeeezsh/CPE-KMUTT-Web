import { useCallback, useContext } from 'react';

import { NavbarContext } from 'common/contexts/navbarContext';

export default function useMobileMenu() {
  const { isMobileMenuOpened, setIsMobileMenuOpened } = useContext(NavbarContext);

  const openMobileMenu = useCallback(() => setIsMobileMenuOpened(true), [
    setIsMobileMenuOpened,
  ]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpened(false), [
    setIsMobileMenuOpened,
  ]);

  return {
    isMobileMenuOpened,
    setMobileMenuOpen: setIsMobileMenuOpened,
    openMobileMenu,
    closeMobileMenu,
  };
}
