import { createContext, Dispatch, SetStateAction } from 'react';

interface NavbarContextType {
  isMobileMenuOpened: boolean;
  setIsMobileMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export const NavbarContext = createContext<NavbarContextType>({
  isMobileMenuOpened: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsMobileMenuOpened: () => {},
});
