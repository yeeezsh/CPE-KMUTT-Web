import { act, renderHook } from '@testing-library/react-hooks';

import * as useToggleType from '.';

describe('useToggle()', () => {
  const { default: useToggle } = require('.') as typeof useToggleType;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be perform without crash', () => {
    renderHook(() => useToggle());
  });

  it('should be perform toggle correctly', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });
});
