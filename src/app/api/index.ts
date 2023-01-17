import axios from 'axios';

import { CommentType } from '../interface';

const getAllComments = () => axios.get('http://localhost:4000/comments');

const getComments = (
  page: number,
  limit: number,
  order: string,
  sort: string
) =>
  axios.get(
    `http://localhost:4000/comments?_page=${page}&_limit=${limit}&_order=${order}&_sort=${sort}`
  );

const getComment = (id: number) =>
  axios.get(`http://localhost:4000/comments/${id}`);

const postComment = ({
  id,
  profile_url,
  author,
  content,
  createdAt,
}: CommentType) =>
  axios.post('http://localhost:4000/comments', {
    id,
    profile_url,
    author,
    content,
    createdAt,
  });

const putComment = ({
  id,
  profile_url,
  author,
  content,
  createdAt,
}: CommentType) =>
  axios.put(`http://localhost:4000/comments/${id}`, {
    profile_url,
    author,
    content,
    createdAt,
  });

const deleteComment = (id: number) =>
  axios.delete(`http://localhost:4000/comments/${id}`);

const CommentService = {
  getAllComments,
  getComments,
  getComment,
  postComment,
  putComment,
  deleteComment,
};

export default CommentService;
