import { createAsyncThunk } from '@reduxjs/toolkit';

import { FETCH_COMMENTS_TYPE_PREFIX } from '../../enums';
import { CommentType } from '../../interfaces';

export const removeComment = createAsyncThunk(
  FETCH_COMMENTS_TYPE_PREFIX.REMOVE,
  async (comment: CommentType) => {
    await fetch(`http://localhost:4000/comments/${comment.id}`, {
      method: 'DELETE',
    });
    return comment;
  }
);
