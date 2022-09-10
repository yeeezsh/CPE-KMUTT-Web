import { useMemo } from 'react';

import useDropdown from 'common/components/Navbar/hooks/useDropdown';
import useIsMobileDisplay from 'common/hooks/useIsMobileDisplay';
import useMobileMenu from 'common/hooks/useMobileMenu';

export default function useClickHamburger() {
  const { visible, showDropdown } = useDropdown();

  const { isMobileMenuOpened, setMobileMenuOpen } = useMobileMenu();

  const isMobileDisplay = useIsMobileDisplay();

  const menuOpened = useMemo(() => (isMobileDisplay ? isMobileMenuOpened : visible), [
    isMobileDisplay,
    isMobileMenuOpened,
    visible,
  ]);

  const desktopMenuOpened = useMemo(() => (isMobileDisplay ? false : visible), [
    isMobileDisplay,
    isMobileMenuOpened,
    visible,
  ]);

  const handleClickHamburger = () => {
    if (isMobileDisplay) {
      setMobileMenuOpen(!isMobileMenuOpened);
      return;
    }

    showDropdown();
  };

  return {
    menuOpened,
    desktopMenuOpened,
    handleClickHamburger,
  };
}
