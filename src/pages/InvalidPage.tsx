import { Link } from 'react-router-dom';

interface InvalidPageProps {
  paramName: string;
}

const paramMap: {
  [key: string]: string;
} = {
  logId: '인증 날짜',
  userId: '유저 정보',
  roomId: '방 정보'
};

const InvalidPage = ({ paramName }: InvalidPageProps) => {
  return (
    <div className="relative h-full">
      <div className="absolute inset-x-0 top-1/3 flex flex-col items-center">
        <div className="mb-8 aspect-square w-3/5 max-w-[250px]">
          <img
            src="/notFound.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center text-center ">
          <h1 className="mb-4 text-3xl">이런!</h1>
          <h2 className="text-xl text-dark-gray">
            올바른 {paramMap[paramName]}가 아니에요
          </h2>
        </div>
      </div>
      <Link
        to={'/'}
        className="absolute inset-x-0 bottom-5 mx-5 rounded-full bg-light-point p-3 text-center font-extrabold text-white dark:bg-dark-point"
      >
        홈으로
      </Link>
    </div>
  );
};

export default InvalidPage;
