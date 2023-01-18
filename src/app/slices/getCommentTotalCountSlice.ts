import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import CommentService from '../api';

interface TotalCountType {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  totalCount: number;
}
export const getCommentsTotalCountThunk = createAsyncThunk(
  'comments/total',
  async () => {
    const { data } = await CommentService.getAllComments();
    return data;
  }
);

const initialState: TotalCountType = {
  loading: 'idle',
  totalCount: 0,
};

export const getCommentTotalCountSlice = createSlice({
  name: 'getCommentTotalCount',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCommentsTotalCountThunk.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getCommentsTotalCountThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.totalCount = action.payload.length;
    });
    builder.addCase(getCommentsTotalCountThunk.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
