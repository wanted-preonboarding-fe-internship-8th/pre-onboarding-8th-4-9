import axios from 'axios';

const getComments = (
  page: number,
  limit: number,
  order: string,
  sort: string
) => {
  axios.get(
    `http://localhost:4000/comments?_page=${page}&_limit=${limit}&_order=${order}&_sort=${sort}`
  );
};

const getComment = (id: number) => {
  axios.get(`http://localhost:4000/comments/${id}`);
};

const postComment = ({ id, profile_url, author, content, createdAt }: any) => {
  axios.post('http://localhost:4000/comments', {
    id,
    profile_url,
    author,
    content,
    createdAt,
  });
};

const putComment = ({ id, profile_url, author, content, createdAt }: any) => {
  axios.put(`http://localhost:4000/comments/${id}`, {
    profile_url,
    author,
    content,
    createdAt,
  });
};

const deleteComment = (id: number) => {
  axios.delete(`http://localhost:4000/comments/${id}`);
};

const CommentService = {
  getComments,
  getComment,
  postComment,
  putComment,
  deleteComment,
};

export default CommentService;
