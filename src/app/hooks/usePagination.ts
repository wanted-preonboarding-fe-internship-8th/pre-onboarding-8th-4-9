import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCommentsThunk } from '../slices/getCommentsSlice';
import { useAppDispatch, RootState } from '../store';

//이걸로 get요청 및 페이징을 다루고 싶으나..
export default function usePagination() {
  const dispatch = useAppDispatch();

  const { comments, loading } = useSelector(
    (state: RootState) => state.commentsReducer
  );

  const [currentPage, setCurrentPage] = useState(1);

  const onMovePage = (page: number) => {
    setCurrentPage(page);
  };

  const getComments = () => {
    if (loading === 'succeeded') return;
    dispatch(
      getCommentsThunk({
        page: currentPage,
        limit: 5,
        order: 'desc',
        sort: 'id',
      })
    );
  };

  useEffect(() => {
    getComments();
  }, [getComments, currentPage]);

  return [comments, getComments, currentPage, setCurrentPage, onMovePage];
}
