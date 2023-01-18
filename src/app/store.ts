import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createLogger } from 'redux-logger';

import { commentsReducer } from '../features/Comments/commentsSlice';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
