import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="relative  h-screen ">
      <div className="absolute inset-x-0 top-1/3 flex flex-col items-center">
        <div className="mb-8 aspect-square w-3/5 max-w-[250px]">
          <img
            src="/notFound.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center text-center ">
          <h1 className="mb-4 text-3xl">어라라</h1>
          <h3 className="text-lg text-dark-gray">숲에서 길을 잃었어요...</h3>
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

export default NotFoundPage;
