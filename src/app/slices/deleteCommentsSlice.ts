import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import CommentService from '../api';
import { DeleteCommentState } from '../interface';

export const deleteCommentsThunk = createAsyncThunk(
  'comments/delete',
  async (id: number) => await CommentService.deleteComment(id)
);

const initialState: DeleteCommentState = {
  id: null,
  loading: 'idle',
};

export const deleteCommentsSlice = createSlice({
  name: 'deleteComments',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(deleteCommentsThunk.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(deleteCommentsThunk.fulfilled, (state, action) => {
      if (!state.id) return;
      state.loading = 'succeeded';
      action.payload;
    });
    builder.addCase(deleteCommentsThunk.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
