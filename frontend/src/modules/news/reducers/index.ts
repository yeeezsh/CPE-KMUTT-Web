import { createSlice } from '@reduxjs/toolkit';

import { FetchNews, NewsReducer } from 'modules/news/reducers/types';

export const DEFAULT_START_N_OF_NEWS = 0;
export const FIRST_N_OF_NEWS = 9;
export const LOADMORE_N_OF_NEWS = 3;

const initState: NewsReducer = {
  start: 0,
  limit: FIRST_N_OF_NEWS,
};

export const newsSlice = createSlice({
  name: 'BROWSE_NEWS',
  initialState: initState,
  reducers: {
    fetch: (state, action: FetchNews) => {
      return { ...state, limit: action.payload.limit };
    },
  },
});

export default newsSlice.reducer;
export const newsAction = newsSlice.actions;
