import styled from 'styled-components';

import { deleteCommentsThunk } from '../app/slices/deleteCommentsSlice';
import { getCommentByIdThunk } from '../app/slices/getCommentByIdSlice';
import { useAppDispatch } from '../app/store';

function CommentList(comments: any) {
  console.log('list,,,', comments);

  const dispatch = useAppDispatch();

  const getCommentIdHandler = (id: number) => {
    dispatch(getCommentByIdThunk(id));
  };

  const deleteHandler = (id: number) => {
    dispatch(deleteCommentsThunk(id));
  };

  return (
    <>
      {comments.comments[0]?.map((comment: any, key: string) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="profile" />
          {comment.author}
          <CreatedAt>{comment.createdAt}</CreatedAt>
          <Content>{comment.content}</Content>
          <Button>
            <a onClick={() => getCommentIdHandler(comment.id)}>수정</a>
            <a onClick={() => deleteHandler(comment.id)}>삭제</a>
          </Button>
          <hr />
        </Comment>
      ))}
    </>
  );
}

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
