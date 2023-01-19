import { createSlice } from '@reduxjs/toolkit';

import { CommentType } from '../../interfaces';

import { addComment } from './addComment';
import { editComment } from './editComment';
import { fetchComments, fetchTotalComment } from './fetchComments';
import { fetchOneComment } from './fetchOneComment';
import { removeComment } from './removeComment';

type stateType = {
  commentData: CommentType[];
  isLoading: boolean;
  error: string | null;
  onEditData: object | null;
};

const initialState: stateType = {
  commentData: [],
  isLoading: false,
  error: null,
  onEditData: {},
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    // 전체 댓글 로딩
    builder.addCase(fetchComments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.commentData = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error;
    });

    // 토탈 페이지 계산을 위한 전체 댓글 로딩
    builder.addCase(fetchTotalComment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTotalComment.fulfilled, (state, action) => {
      state.isLoading = false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.totalCount = action.payload.length;
    });
    builder.addCase(fetchTotalComment.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error;
    });

    // 특정 댓글 하나 로딩
    builder.addCase(fetchOneComment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOneComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.onEditData = action.payload;
    });
    builder.addCase(fetchOneComment.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error;
    });

    // 새 댓글 생성
    builder.addCase(addComment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.commentData.push(action.payload);
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error;
    });

    // 댓글 수정
    builder.addCase(editComment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.commentData = state.commentData.map((comment: CommentType) =>
        comment.id === action.payload.id ? action.payload : comment
      );
    });
    builder.addCase(editComment.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error;
    });

    // 댓글 삭제
    builder.addCase(removeComment.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.commentData = state.commentData.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(removeComment.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.error;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
