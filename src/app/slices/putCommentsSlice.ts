import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { EditCommentState, CommentType } from '../interface';

export const putCommentsThunk = createAsyncThunk(
  'comments/put',
  async ({ id, profile_url, author, content, createdAt }: CommentType) => {
    axios
      .put(`http://localhost:4000/comments/${id}`, {
        profile_url,
        author,
        content,
        createdAt,
      })
      .then((response) => {
        return response;
      });
  }
);

const initialState: EditCommentState = {
  comment: [],
  loading: 'idle',
};

export const putCommentsSlice = createSlice({
  name: 'getComments',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(putCommentsThunk.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(putCommentsThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.comment.push(action.payload);
    });
    builder.addCase(putCommentsThunk.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
