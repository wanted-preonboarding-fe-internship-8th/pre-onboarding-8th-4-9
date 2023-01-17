import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import CommentService from '../api';
import { CommentstateType, optionType } from '../interface';

export const getCommentsThunk = createAsyncThunk(
  'comments/get',
  async ({ page = 1, limit = 5, order = 'desc', sort = 'id' }: optionType) =>
    await CommentService.getComments(page, limit, order, sort)
);

const initialState: CommentstateType = {
  comments: [],
  loading: 'idle',
};

export const getCommentsSlice = createSlice({
  name: 'getComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsThunk.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getCommentsThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.comments.push(action.payload.data);
    });
    builder.addCase(getCommentsThunk.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
