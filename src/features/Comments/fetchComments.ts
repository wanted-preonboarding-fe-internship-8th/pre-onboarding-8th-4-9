import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'comments/fetch',
  async ({ page, limit, order, sort }) => {
    const response = await fetch(
      `http://localhost:4000/comments?_page=${page}&_limit=${limit}&_order=${order}&_sort=${sort}`
    );
    return await response.json();
  }
);

export const fetchTotalComment = createAsyncThunk('total/fetch', async () => {
  const response = await fetch('http://localhost:4000/comments');
  return await response.json();
});
