import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../app/store';
import Form from '../components/Form';
import { addComment } from '../features/Comments/addComment';
import { editComment } from '../features/Comments/editComment';
import { CommentType } from '../interfaces';

function FormContainer() {
  const dispatch = useAppDispatch();
  const { isLoading, data, error, onEditData } = useSelector(
    (state: RootState) => state.comments
  );

  return (
    <Form
      postComment={(comment: CommentType) => dispatch(addComment(comment))}
      onEditData={onEditData}
      editComment={(comment) => dispatch(editComment(comment))}
    />
  );
}

export default FormContainer;
