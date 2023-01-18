import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CommentList from '../pages/CommentList';
import FormList from '../pages/FormList';
import PageList from '../pages/PageList';

import { getCommentsThunk } from './slices/getCommentsSlice';
import { useAppDispatch, RootState } from './store';

function App() {
  //TODO: pagination
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();
  const { comments, loading } = useSelector(
    (state: RootState) => state.commentsReducer
  );

  const onGetComments = useCallback(() => {
    if (loading === 'succeeded') return;
    dispatch(
      getCommentsThunk({
        page: currentPage,
        limit: 5,
        order: 'desc',
        sort: 'id',
      })
    );
  }, []);

  useEffect(() => {
    onGetComments();
  }, [onGetComments]);

  return (
    <div>
      <CommentList comments={comments} />
      <PageList />
      <FormList />
    </div>
  );
}

export default App;
