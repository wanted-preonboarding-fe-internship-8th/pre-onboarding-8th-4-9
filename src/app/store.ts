import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { commentsReducer } from '../features/Comments/commentsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
