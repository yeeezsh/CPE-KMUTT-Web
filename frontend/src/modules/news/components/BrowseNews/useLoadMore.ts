import { join } from 'path';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { newsAction, FIRST_N_OF_NEWS, LOADMORE_N_OF_NEWS } from 'modules/news/reducers';

import { cardConstantsProps } from './types';

export type useLoadMoreArgs = {
  initData: cardConstantsProps[];
};

export type useLoadMoreType = {
  moreNewsData: boolean;
  loadMore: () => void;
};

const useLoadMore = (args: useLoadMoreArgs): useLoadMoreType => {
  const { initData } = args;
  const router = useRouter();
  const dispatch = useDispatch();
  const [cur, setCur] = useState<number>(FIRST_N_OF_NEWS);
  const [moreNewsData, setMoreNewsData] = useState<boolean>(false);

  const loadMoreNews = () => {
    setCur(cur + LOADMORE_N_OF_NEWS);
    dispatch(newsAction.fetch({ start: cur, limit: cur + LOADMORE_N_OF_NEWS }));
    const id = String(router.query?.id || '');
    const pathname = router.pathname.replace('[id]', '');
    router.push(join(pathname, id, `?start=${0}&limit=${cur + LOADMORE_N_OF_NEWS}`));
  };

  useEffect(() => {
    if (cur < initData.length) setMoreNewsData(false);
    else setMoreNewsData(true);
  }, [cur]);

  return {
    moreNewsData: moreNewsData,
    loadMore: () => {
      loadMoreNews();
    },
  };
};

export default useLoadMore;
