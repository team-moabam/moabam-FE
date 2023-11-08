import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="relative  h-screen ">
      <div className="absolute inset-x-0 top-1/3 flex flex-col items-center">
        <div className="mb-10 aspect-square w-2/3 bg-gray-200">
          <img
            src="public\notFound.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-2xl">어라라</h1>
          <h3 className="text-dark-gray">숲에서 길을 잃었어요...</h3>
        </div>
      </div>
      <Link
        to={'/'}
        className="absolute inset-x-0 bottom-5 mx-5 rounded-full bg-light-point p-3 text-center text-white"
      >
        홈으로
      </Link>
    </div>
  );
};

export default NotFoundPage;