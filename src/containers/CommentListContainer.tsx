import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState, useAppDispatch } from '../app/store';
import CommentList from '../components/CommentList';
import Loader from '../components/Loader';
import { fetchComments } from '../features/Comments/fetchComments';
import { fetchOneComment } from '../features/Comments/fetchOneComment';
import { removeComment } from '../features/Comments/removeComment';
import { CommentType } from '../interfaces';

function CommentListContainer() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, commentData, error } = useSelector(
    (state: RootState) => state.comments
  );

  const onGetFetchComments = useCallback(async () => {
    await dispatch(
      fetchComments({ page: Number(id), limit: 5, order: 'desc', sort: 'id' })
    );
  }, [id]);

  useEffect(() => {
    onGetFetchComments();
  }, [onGetFetchComments]);

  return (
    <CommentList
      isLoading={isLoading}
      commentsData={commentData}
      error={error}
      fetchOneComment={(comment: CommentType) =>
        dispatch(fetchOneComment(comment))
      }
      removeComment={(comment: CommentType) => dispatch(removeComment(comment))}
    />
  );
}
export default CommentListContainer;
