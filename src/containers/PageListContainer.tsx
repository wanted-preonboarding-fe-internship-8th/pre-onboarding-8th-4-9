import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../app/store';
import PageList from '../components/PageList';
import { fetchTotalComment } from '../features/Comments/fetchComments';

function PageListContainer() {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { totalCount, error } = useSelector(
    (state: RootState) => state.comments
  );

  useEffect(() => {
    dispatch(fetchTotalComment());
  }, [dispatch]);

  return <PageList totalCount={totalCount} />;
}

export default PageListContainer;
