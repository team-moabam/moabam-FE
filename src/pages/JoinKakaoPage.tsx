import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { withAsyncBoundary } from '@suspensive/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import authOptions from '@/core/api/options/auth';

const JoinKakaoPage = withAsyncBoundary(
  () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    // useSuspenseQuery({
    //   ...authOptions.kakao(code ?? ''),
    //   retry: 1
    // });

    useEffect(() => {
      axios
        .get(
          `https://dev-api.moabam.com/members/login/kakao/oauth?code=${code}`
          // {
          //   headers: {
          //     'Content-Type': 'x-form-urlencoded'
          //   }
          // }
        )
        .then((res) => {
          console.log(res);
        })
        .catch(console.error);
      console.log(code);
    }, []);

    return <>TODO: 로그인 작업중</>;
  },
  {
    pendingFallback: <>로그인 처리중...</>,
    rejectedFallback: ({ error }) =>
      error instanceof AxiosError ? error.response?.data?.message : '에러 발생!'
  }
);

// interface JoinProps {
//   code: string;
// }

// const Join = ({ code }: JoinProps) => {
//   const { data } = useSuspenseQuery({
//     ...authOptions.kakao(code ?? ''),
//     retry: 1
//   });

//   return <div>로그인 성공</div>;
// };

// const JoinKakaoPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const code = searchParams.get('code');

//   return (
//     <ErrorBoundary fallback={<>에러</>}>
//       <Suspense fallback={<>로딩..........</>}>
//         <Join code={code ?? ''} />
//       </Suspense>
//     </ErrorBoundary>
//   );
// };

export default JoinKakaoPage;
