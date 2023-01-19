import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../app/store';
import Form from '../components/Form';
import Loader from '../components/Loader';
import { addComment } from '../features/Comments/addComment';
import { editComment } from '../features/Comments/editComment';
import { CommentType } from '../interfaces';

function FormContainer() {
  const dispatch = useAppDispatch();
  const { isLoading, error, onEditData } = useSelector(
    (state: RootState) => state.comments
  );

  if (isLoading) return <Loader />;
  if (error) return <div>Error on fetching data...</div>;

  return (
    <Form
      postComment={(comment: CommentType) => dispatch(addComment(comment))}
      onEditData={onEditData}
      editComment={(newComment) => dispatch(editComment(newComment))}
    />
  );
}

export default FormContainer;
