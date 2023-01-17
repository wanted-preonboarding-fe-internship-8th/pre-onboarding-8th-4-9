import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import CommentService from '../api';
import { EditCommentState, CommentType } from '../interface';

export const postCommentsThunk = createAsyncThunk(
  'comments/post',
  async ({ profile_url, author, content, createdAt }: CommentType) =>
    await CommentService.postComment({
      profile_url,
      author,
      content,
      createdAt,
    })
);

const initialState: EditCommentState = {
  comment: {
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  },
  loading: 'idle',
};

export const postCommentsSlice = createSlice({
  name: 'getComments',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(postCommentsThunk.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(postCommentsThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      console.log('payload', action.payload);
      //TODO: check
      action.payload;
    });

    builder.addCase(postCommentsThunk.rejected, (state) => {
      console.log(state.comment);
      state.loading = 'failed';
    });
  },
});
