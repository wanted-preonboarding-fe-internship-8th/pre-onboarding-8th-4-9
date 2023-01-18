import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageList from '../components/PageList';
import { fetchTotalComment } from '../features/Comments/fetchComments';

function PageListContainer() {
  const dispatch = useDispatch();
  const { totalCount, error } = useSelector((state) => state.comments);

  console.log(totalCount);
  useEffect(() => {
    dispatch(fetchTotalComment());
  }, [dispatch]);

  return <PageList totalCount={totalCount} />;
}

export default PageListContainer;
