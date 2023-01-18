import { createAsyncThunk } from '@reduxjs/toolkit';

import { CommentType } from '../../interfaces';

export const fetchOneComment = createAsyncThunk(
  'comments/fetchOne',
  async (comment: CommentType) => {
    const response = await fetch(
      `http://localhost:4000/comments/${comment.id}`
    );
    return await response.json();
  }
);
