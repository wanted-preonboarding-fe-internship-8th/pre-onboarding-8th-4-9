import { createAsyncThunk } from '@reduxjs/toolkit';

import { CommentType } from '../../interfaces';

export const removeComment = createAsyncThunk(
  'comments/remove',
  async (comment: CommentType) => {
    await fetch(`http://localhost:4000/comments/${comment.id}`, {
      method: 'DELETE',
    });
    return comment;
  }
);
