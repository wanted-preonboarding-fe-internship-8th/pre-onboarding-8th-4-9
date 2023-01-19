import { createAsyncThunk } from '@reduxjs/toolkit';

import { FETCH_COMMENTS_TYPE_PREFIX } from '../../enums';
import { CommentType } from '../../interfaces';

export const fetchOneComment = createAsyncThunk(
  FETCH_COMMENTS_TYPE_PREFIX.FETCH_ONE,
  async (comment: CommentType) => {
    const response = await fetch(
      `http://localhost:4000/comments/${comment.id}`
    );
    return await response.json();
  }
);
