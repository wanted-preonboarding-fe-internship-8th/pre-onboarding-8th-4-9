import { createAsyncThunk } from '@reduxjs/toolkit';

import { FETCH_COMMENTS_TYPE_PREFIX } from '../../enums';
import { CommentType } from '../../interfaces';

export const addComment = createAsyncThunk(
  FETCH_COMMENTS_TYPE_PREFIX.ADD,
  async (comment: CommentType) => {
    const response = await fetch('http://localhost:4000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    return await response.json();
  }
);
