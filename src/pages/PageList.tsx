import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getCommentsTotalCountThunk } from '../app/slices/getCommentTotalCountSlice';
import { RootState, useAppDispatch } from '../app/store';

function PageList() {
  const dispatch = useAppDispatch();
  const { loading, totalCount } = useSelector(
    (state: RootState) => state.getCommentTotalCountReducer
  );

  useEffect(() => {
    if (loading === 'succeeded') return;
    dispatch(getCommentsTotalCountThunk());
  }, [dispatch]);

  return (
    <PageListStyle>
      {totalCount < 5 && <Page>1</Page>}
      {totalCount &&
        Array(Math.ceil(totalCount / 5))
          .fill(null)
          .map((count, idx) => <Page key={idx}>{idx + 1}</Page>)}
    </PageListStyle>
  );
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
`;
