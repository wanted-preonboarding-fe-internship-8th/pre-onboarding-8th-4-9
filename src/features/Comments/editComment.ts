import { createAsyncThunk } from '@reduxjs/toolkit';

import { CommentType } from '../../interfaces';

export const editComment = createAsyncThunk(
  'comments/edit',
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
