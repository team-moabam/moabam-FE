// TODO: MSW로 모킹한 API를 대상으로 한 임시용 파일이에요. 이후에 백엔드 서버와 통신이 가능하게 되면 삭제해도 좋은 파일이에요.
import { queryOptions } from '@tanstack/react-query';
import postAPI from '../functions/examplePostAPI';

export const examplePostOptions = {
  all: () =>
    queryOptions({
      queryKey: ['groups', 'all'] as const,
      queryFn: postAPI.getAllPosts
    }),
  detail: (postId: string) =>
    queryOptions({
      queryKey: ['groups', 'detail', postId] as const,
      queryFn: () => postAPI.getDetailPost(postId)
    })
};

export default examplePostOptions;
