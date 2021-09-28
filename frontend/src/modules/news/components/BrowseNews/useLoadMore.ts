import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { BROWSE_NEWS_PATH } from 'modules/news/constants';
import { newsAction, FIRST_N_OF_NEWS, LOADMORE_N_OF_NEWS } from 'modules/news/reducers';

import { cardConstantsProps } from './types';

export type useLoadMoreArgs = {
  initData: cardConstantsProps[];
};

export type useLoadMore = {
  newsData: cardConstantsProps[];
  moreNewsData: boolean;
  loadMore: () => void;
};

// TODO: move moreNewsData to logic to reducer
const useLoadMore = (args: useLoadMoreArgs): useLoadMore => {
  const { initData } = args;
  const router = useRouter();
  const dispatch = useDispatch();
  const [newsData, setNewsData] = useState<cardConstantsProps[]>([]);
  const [cur, setCur] = useState<number>(FIRST_N_OF_NEWS);
  const [moreNewsData, setMoreNewsData] = useState<boolean>(false);

  useEffect(() => {
    setNewsData(initData.slice(0, FIRST_N_OF_NEWS));
  }, []);

  const loadMoreNews = () => {
    setCur(cur + LOADMORE_N_OF_NEWS);
    dispatch(newsAction.fetch({ start: cur, limit: cur + LOADMORE_N_OF_NEWS }));
    router.push(BROWSE_NEWS_PATH + `?start=${0}&limit=${cur + LOADMORE_N_OF_NEWS}`);
  };

  useEffect(() => {
    if (cur < initData.length) setMoreNewsData(false);
    else setMoreNewsData(true);

    setNewsData(initData.slice(0, cur));
  }, [cur]);

  return {
    newsData,
    moreNewsData: moreNewsData,
    loadMore: () => {
      loadMoreNews();
    },
  };
};

export default useLoadMore;
