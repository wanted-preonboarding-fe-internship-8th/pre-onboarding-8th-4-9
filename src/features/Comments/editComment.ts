import { createAsyncThunk } from '@reduxjs/toolkit';

import { CommentType } from '../../interfaces';

export const editComment = createAsyncThunk(
  'comments/edit',
  async (comment: CommentType, newComment) => {
    const response = await fetch(
      `http://localhost:4000/comments/${comment.id}`,
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
