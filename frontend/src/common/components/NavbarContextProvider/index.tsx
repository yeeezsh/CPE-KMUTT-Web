import React, { useState } from 'react';

import { NavbarContext } from 'common/contexts/navbarContext';

import { NavbarContextProviderProps } from './types';

export default function NavbarContextProvider({
  children,
}: NavbarContextProviderProps): JSX.Element {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        isMobileMenuOpened: isMobileOpen,
        setIsMobileMenuOpened: setIsMobileOpen,
      }}>
      {children}
    </NavbarContext.Provider>
  );
}
