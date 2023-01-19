export interface CommentType {
  id?: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface EditDataType {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface CommentstateType {
  comments: CommentType;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export interface EditCommentState {
  comment: CommentType;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export interface DeleteCommentState {
  id: number | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export interface optionType {
  page: number;
  limit: number;
  order: string;
  sort: string;
}
