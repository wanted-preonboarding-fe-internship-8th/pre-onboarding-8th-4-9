import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import CommentService from '../api';
import { CommentstateType, optionType } from '../interface';

export const getCommentsThunk = createAsyncThunk(
  'comments/get',
  async ({ page = 1, limit = 5, order = 'desc', sort = 'id' }: optionType) => {
    // const response = await CommentService.getComments(page, limit, order, sort);
    // console.log(response);
    const response = axios.get(
      `http://localhost:4000/comments?_page=${page}&_limit=${limit}&_order=${order}&_sort=${sort}`
    );
    return response;
  }
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
