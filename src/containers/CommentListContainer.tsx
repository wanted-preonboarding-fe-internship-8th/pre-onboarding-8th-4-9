import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { fetchComments } from '../features/Comments/fetchComments';
import { fetchOneComment } from '../features/Comments/fetchOneComment';
import { removeComment } from '../features/Comments/removeComment';
import CommentList from '../components/CommentList';
import { useParams } from 'react-router-dom';

function CommentListContainer() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.comments);
  const { id } = useParams();

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
