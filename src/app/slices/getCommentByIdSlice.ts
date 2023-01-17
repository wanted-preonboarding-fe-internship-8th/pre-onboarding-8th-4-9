import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { EditCommentState } from '../interface';

export const getCommentByIdThunk = createAsyncThunk(
  'comments/getCommentId',
  async (id: number) => {
    const response = axios.get(`http://localhost:4000/comments/${id}`);
    return response;
  }
);

const initialState: EditCommentState = {
  comment: {},
  loading: 'idle',
};

export const getCommentByIdSlice = createSlice({
  name: 'getCommentId',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCommentByIdThunk.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getCommentByIdThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.comment = action.payload.data;
    });
    builder.addCase(getCommentByIdThunk.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
