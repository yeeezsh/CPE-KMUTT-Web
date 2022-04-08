import { combineReducers, configureStore } from '@reduxjs/toolkit';

import newsReducer from 'modules/news/reducers';
const rootReducer = combineReducers({
  news: newsReducer,
});

export type StoresState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export { store, rootReducer };
