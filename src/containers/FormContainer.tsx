import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../components/Form';
import { addComment } from '../features/Comments/addComment';
import { editComment } from '../features/Comments/editComment';

function FormContainer() {
  const dispatch = useDispatch();
  const { isLoading, data, error, onEditData } = useSelector(
    (state) => state.comments
  );

  return (
    <Form
      postdata={(data) => dispatch(addComment(data))}
      onEditData={onEditData}
      editComment={(comment, newData) =>
        dispatch(editComment(comment, newData))
      }
    />
  );
}

export default FormContainer;
