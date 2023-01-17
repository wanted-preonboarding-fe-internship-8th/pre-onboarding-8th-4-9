import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createLogger } from 'redux-logger';

import { getCommentByIdSlice } from './slices/getCommentByIdSlice';
import { getCommentsSlice } from './slices/getCommentsSlice';
import { getCommentTotalCountSlice } from './slices/getCommentTotalCountSlice';
import { postCommentsSlice } from './slices/postCommentsSlice';

const logger = createLogger();

const rootReducer = combineReducers({
  commentsReducer: getCommentsSlice.reducer,
  getCommentTotalCountReducer: getCommentTotalCountSlice.reducer,
  getCommentByIdReducer: getCommentByIdSlice.reducer,
  postCommentReducer: postCommentsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
