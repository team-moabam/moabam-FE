import { useMutation } from '@tanstack/react-query';
import memberAPI from '@/core/api/functions/memberAPI';
import { useMoveRoute } from '@/core/hooks';
import { STORAGE_KEYS } from '@/core/constants/storageKeys';

const Logout = () => {
  const moveTo = useMoveRoute();
  const mutation = useMutation({
    mutationFn: memberAPI.logout
  });

  const handleLogout = () => {
    memberAPI.logout();
    mutation.mutate(undefined, {
      onSuccess() {
        localStorage.removeItem(STORAGE_KEYS.MEMBER_ID);
        moveTo('join');
      }
    });
  };

  return (
    <div className="p-3">
      <h1 className="mb-10 mt-5 text-xl font-extrabold">
        로그아웃 하실 건가요?
      </h1>
      <button
        className="btn btn-danger w-full"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  );
};
export default Logout;
