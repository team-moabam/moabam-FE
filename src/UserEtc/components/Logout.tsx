import userAPI from '@/core/api/functions/userAPI';
import { useMoveRoute } from '@/core/hooks';

const Logout = () => {
  const moveTo = useMoveRoute();
  return (
    <div className="p-3">
      <h1 className="mb-10 mt-5 text-xl font-extrabold">
        로그아웃 하실 건가요?
      </h1>
      <button
        className="btn btn-danger w-full"
        onClick={() => {
          userAPI.logout();
          moveTo('join');
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Logout;
