import { Dispatch, SetStateAction, useCallback, useContext } from 'react';

import { NavbarContext } from 'common/contexts/navbarContext';

export type UseMobileMenuType = {
  isMobileMenuOpened: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
};

export default function useMobileMenu(): UseMobileMenuType {
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
