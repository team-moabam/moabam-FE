import { queryOptions } from '@tanstack/react-query';
import memberAPI from '../functions/memberAPI';

const authOptions = {
  kakao: (code: string) =>
    queryOptions({
      queryKey: ['auth', 'kakao', code] as const,
      queryFn: () => memberAPI.getMemberKakaoAuth({ code })
    })
};

export default authOptions;
