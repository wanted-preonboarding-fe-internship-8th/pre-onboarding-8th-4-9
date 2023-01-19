import { createAsyncThunk } from '@reduxjs/toolkit';

import { FETCH_COMMENTS_TYPE_PREFIX } from '../../enums';
import { CommentType } from '../../interfaces';

export const editComment = createAsyncThunk(
  FETCH_COMMENTS_TYPE_PREFIX.EDIT,
  async (newComment: CommentType) => {
    const response = await fetch(
      `http://localhost:4000/comments/${newComment.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newComment),
      }
    );
    return await response.json();
  }
);
