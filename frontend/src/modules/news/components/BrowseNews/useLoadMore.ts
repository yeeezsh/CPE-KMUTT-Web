import { useEffect, useState } from 'react';
import { constants } from './constant';
import { cardConstantsProps } from './types';

export type useLoadMore = {
  newsData: cardConstantsProps[];
  moreNewsData: boolean;
  loadMore: () => void;
};

const FIRST_N_OF_NEWS = 9;
const LOADMORE_N_OF_NEWS = 3;

export default (): useLoadMore => {
  const [newsData, setNewsData] = useState<cardConstantsProps[]>([]);
  const [cur, setCur] = useState<number>(FIRST_N_OF_NEWS);
  const [moreNewsData, setMoreNewsData] = useState<boolean>(false);

  useEffect(() => {
    setNewsData(constants.slice(0, FIRST_N_OF_NEWS));
  }, []);

  const loadMoreNews = () => {
    setCur(cur + LOADMORE_N_OF_NEWS);
  };

  useEffect(() => {
    if (cur < constants.length) setMoreNewsData(false);
    else setMoreNewsData(true);

    setNewsData(constants.slice(0, cur));
  }, [cur]);

  return {
    newsData,
    moreNewsData: moreNewsData,
    loadMore: () => {
      loadMoreNews();
    },
  };
};
