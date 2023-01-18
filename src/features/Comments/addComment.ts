import { createAsyncThunk } from '@reduxjs/toolkit';

import { CommentType } from '../../interfaces';

export const addComment = createAsyncThunk(
  'comments/add',
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
