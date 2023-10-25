// TODO: 임시용 파일이에요. 이후에 백엔드 서버와 통신이 가능하게 되면 삭제해도 좋은 파일이에요.
import { createQueryKeys } from '@lukemorales/query-key-factory';
import postAPI from '../functions/postTestAPI';

const postsTestQuery = createQueryKeys('postsTest', {
  all: {
    queryKey: null,
    queryFn: postAPI.getAllPosts
  },
  detail: (postId: string) => ({
    queryKey: [postId],
    queryFn: () => postAPI.getDetailPost(postId)
  })
});

export default postsTestQuery;
