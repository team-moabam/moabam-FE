// TODO: 임시용 API 요청 함수에요. 이후에 백엔드 서버와 통신이 가능하게 되면 삭제해도 좋은 파일이에요.
import { baseInstance } from '../instance';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const postTestAPI = {
  getAllPosts: async () => {
    const { data } = await baseInstance.get<Post[]>(`/example/posts`);
    return data;
  },
  getDetailPost: async (postId: string) => {
    const { data } = await baseInstance.get<Post>(`/example/posts/${postId}`);
    return data;
  },
  postPost: async (post: Post) => {
    const { data } = await baseInstance.post<{ message: string }>(
      '/example/posts',
      {
        data: post
      }
    );
    return data;
  },
  putPost: async (post: Post) => {
    const { data } = await baseInstance.put<{ message: string }>(
      `/example/posts/${post.id}`,
      { data: post }
    );
    return data;
  },
  deletePost: async (postId: string) => {
    const { data } = await baseInstance.delete<{ message: string }>(
      `/example/posts/${postId}`
    );
    return data;
  }
};

export default postTestAPI;
