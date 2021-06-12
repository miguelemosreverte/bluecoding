import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/gif_search/gif_search';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
