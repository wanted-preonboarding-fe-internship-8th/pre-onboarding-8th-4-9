import styled from 'styled-components';
import Loader from './Loader';

import { CommentType } from '../interfaces';

type CommentListProps = {
  isLoading: boolean;
  commentsData: CommentType[];
  error: any;
  fetchOneComment: (comment: CommentType) => void;
  removeComment: (comment: CommentType) => void;
};

function CommentList({
  isLoading,
  commentsData,
  error,
  fetchOneComment,
  removeComment,
}: CommentListProps) {
  if (isLoading) return <Loader />;
  if (error) return <div>Error on fetching data...</div>;

  return (
    <>
      {commentsData.map((comment: CommentType) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt="" />
          {comment.author}
          <CreatedAt>{comment.createdAt}</CreatedAt>
          <Content>{comment.content}</Content>
          <Button>
            <a
              onClick={() => {
                fetchOneComment(comment);
              }}
            >
              수정
            </a>
            <a
              onClick={() => {
                removeComment(comment);
                location.reload();
              }}
            >
              삭제
            </a>
          </Button>
          <hr />
        </Comment>
      ))}
    </>
  );
}

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

export default CommentList;
