import React from 'react';

import { act, renderHook } from '@testing-library/react-hooks';

import NavbarContextProvider from 'common/components/NavbarContextProvider';

import * as useMobileMenuType from '.';

const wrapper: React.FC = ({ children }): JSX.Element => (
  <NavbarContextProvider>{children}</NavbarContextProvider>
);

describe('useMobileMenu', () => {
  const { default: useMobileMenu } = require('.') as typeof useMobileMenuType;

  it('should be perform without crash', () => {
    renderHook(() => useMobileMenu());
  });

  it('should be perform openMobileMenu correctly', () => {
    const { result } = renderHook(() => useMobileMenu(), { wrapper });

    expect(result.current.isMobileMenuOpened).toBe(false);

    act(() => {
      result.current.openMobileMenu();
    });

    expect(result.current.isMobileMenuOpened).toBe(true);
  });
});
