// TODO: 임시용 API 요청 함수에요. 이후에 백엔드 서버와 통신이 가능하게 되면 삭제해도 좋은 파일이에요.
import { baseInstance } from '../instance';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const examplePostAPI = {
  getAllPosts: async () => {
    return await baseInstance.get<Post[]>(`/example/posts`);
  },
  getDetailPost: async (postId: string) => {
    return await baseInstance.get<Post>(`/example/posts/${postId}`);
  },
  postPost: async (post: Post) => {
    return await baseInstance.post<{ message: string }>('/example/posts', post);
  },
  putPost: async (post: Post) => {
    return await baseInstance.put<{ message: string }>(
      `/example/posts/${post.id}`,
      post
    );
  },
  deletePost: async (postId: string) => {
    return await baseInstance.delete<{ message: string }>(
      `/example/posts/${postId}`
    );
  }
};

export default examplePostAPI;
