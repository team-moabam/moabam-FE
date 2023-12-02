import { Navigate } from 'react-router-dom';
import { STORAGE_KEYS } from '@/core/constants/storageKeys';

const baseURI = import.meta.env.PROD
  ? import.meta.env.VITE_DEPLOY_ENDPOINT
  : import.meta.env.VITE_LOCALHOST;

const KAKAO_LOGIN_URL =
  `https://kauth.kakao.com/oauth/authorize?` +
  `response_type=code&` +
  `client_id=${import.meta.env.VITE_KAKAO_LOGIN_CLIENT_ID}&` +
  `redirect_uri=${baseURI}` +
  `/login/kakao/oauth`;

const JoinPage = () => {
  const memberId = localStorage.getItem(STORAGE_KEYS.MEMBER_ID);

  if (memberId) {
    return <Navigate to="/" />;
  }

  return (
    <main className="flex h-full flex-col items-center justify-center p-2">
      <section className="flex grow flex-col items-center justify-center text-center">
        <div className="w-48 rounded-full bg-yellow-50">
          <img
            src="/assets/skins/defaultOmok.png"
            className="p-4"
          />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl">안녕하세요!</h1>
          <p className="mt-4 text-lg text-dark-gray">
            다른 사람들과 같은 곳을 바라보면서 <br /> 루틴에 활기를 찾아봐요
          </p>
        </div>
      </section>
      <section className="w-full justify-self-end p-4">
        <a
          className="relative flex w-full cursor-pointer select-none rounded-2xl bg-[#FFEB06] p-3"
          href={KAKAO_LOGIN_URL}
        >
          <img
            className="absolute top-1/2 h-7 -translate-y-1/2"
            src="/kakaoTalk.png"
            alt=""
          />
          <p className="w-full text-center font-extrabold text-[#6A2346]">
            카카오 계정 로그인
          </p>
        </a>
      </section>
    </main>
  );
};

export default JoinPage;
