import { PayloadAction } from '@reduxjs/toolkit';

import { Pagination } from 'common/types/pagination';

export type FetchNews = PayloadAction<Pagination>;

export type NewsReducer = Pagination;
