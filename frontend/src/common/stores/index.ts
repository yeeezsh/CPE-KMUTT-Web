import { combineReducers, configureStore } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});

export type StoresState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export { store, rootReducer };
