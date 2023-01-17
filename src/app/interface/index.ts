export interface CommentType {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface CommentstateType {
  //TODO: initial type
  comments: any;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export interface EditCommentState {
  //TODO: initial type
  comment: any;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export interface DeleteCommentState {
  //TODO: initial type
  id: number | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export interface optionType {
  page: number;
  limit: number;
  order: string;
  sort: string;
}
