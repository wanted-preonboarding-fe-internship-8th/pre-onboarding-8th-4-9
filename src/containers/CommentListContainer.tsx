import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../app/store';
import CommentList from '../components/CommentList';
import { fetchComments } from '../features/Comments/fetchComments';
import { fetchOneComment } from '../features/Comments/fetchOneComment';
import { removeComment } from '../features/Comments/removeComment';
import { CommentType } from '../interfaces';

function CommentListContainer() {
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useSelector(
    (state: RootState) => state.comments
  );

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <CommentList
      isLoading={isLoading}
      data={data}
      error={error}
      fetchOneComment={(comment: CommentType) =>
        dispatch(fetchOneComment(comment))
      }
      removeComment={(comment: CommentType) => dispatch(removeComment(comment))}
    />
  );
}
export default CommentListContainer;
