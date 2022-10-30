import { combineReducers, configureStore } from '@reduxjs/toolkit';

import menuReducer from 'common/redcucers/menu';

import newsReducer from 'modules/news/reducers';

const rootReducer = combineReducers({
  news: newsReducer,
  menu: menuReducer,
});

export type StoresState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export { store, rootReducer };
