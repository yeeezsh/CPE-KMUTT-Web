import { act, renderHook } from '@testing-library/react-hooks';

import { constants } from './constant';
import useLoadMore from './useLoadMore';

describe('useloadMore Test', () => {
  it('should able to detect load more data correctly', () => {
    const { result } = renderHook(() => useLoadMore({ initData: constants }));

    expect(result.current.newsData.length).toBe(9);
    expect(result.current.moreNewsData).toBe(false);
    act(() => {
      result.current.loadMore();
    });
    act(() => {
      result.current.loadMore();
    });

    expect(result.current.newsData.length).toBe(13);
    expect(result.current.moreNewsData).toBe(true);
  });
});
