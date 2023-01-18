import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { postCommentsThunk } from '../app/slices/postCommentsSlice';
import { useAppDispatch, RootState } from '../app/store';

function FormList() {
  const dispatch = useAppDispatch();

  const commentById = useSelector(
    (state: RootState) => state.getCommentByIdReducer.comment
  );

  const [commentFormValue, setCommentFormValue] = useState({
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  });

  const onPostingComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { profile_url, author, content, createdAt } = commentFormValue;
    dispatch(
      postCommentsThunk({
        profile_url,
        author,
        content,
        createdAt,
      })
    );
  };

  useEffect(() => {
    if (!commentById) return;
    setCommentFormValue({
      profile_url: commentById?.profile_url,
      author: commentById?.author,
      content: commentById?.content,
      createdAt: commentById?.createdAt,
    });
  }, [commentById]);

  return (
    <FormStyle>
      <form onSubmit={onPostingComment}>
        <input
          type="text"
          name="profile_url"
          value={commentFormValue?.profile_url || ''}
          onChange={(e) =>
            setCommentFormValue({
              ...commentFormValue,
              profile_url: e.target.value,
            })
          }
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          value={commentFormValue?.author || ''}
          onChange={(e) =>
            setCommentFormValue({
              ...commentFormValue,
              author: e.target.value,
            })
          }
          placeholder="작성자"
        />
        <br />
        <textarea
          name="content"
          value={commentFormValue?.content || ''}
          onChange={(e) =>
            setCommentFormValue({
              ...commentFormValue,
              content: e.currentTarget.value,
            })
          }
          placeholder="내용"
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          value={commentFormValue?.createdAt || ''}
          onChange={(e) =>
            setCommentFormValue({
              ...commentFormValue,
              createdAt: e.target.value,
            })
          }
          placeholder="2020-05-30"
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default FormList;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
