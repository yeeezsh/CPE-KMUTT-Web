import { act, renderHook } from '@testing-library/react-hooks';

import * as useDropdownType from '.';

describe('useDropdown()', () => {
  const { default: useDropdown } = require('.') as typeof useDropdownType;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be perform without crash', () => {
    renderHook(() => useDropdown());
  });

  it('should be perform toggle correctly', () => {
    const { result } = renderHook(() => useDropdown());

    expect(result.current.visible).toBe(false);

    act(() => {
      result.current.showDropdown();
    });

    expect(result.current.visible).toBe(true);
  });
});
