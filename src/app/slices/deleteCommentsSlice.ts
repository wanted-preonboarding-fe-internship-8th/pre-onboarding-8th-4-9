import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { DeleteCommentState } from '../interface';

export const deleteCommentsThunk = createAsyncThunk(
  'comments/delete',
  async (id: number) => {
    axios.delete(`http://localhost:4000/comments/${id}`).then((response) => {
      return response;
    });
  }
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
