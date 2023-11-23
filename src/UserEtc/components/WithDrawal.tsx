import memberAPI from '@/core/api/functions/memberAPI';
import { useMoveRoute } from '@/core/hooks';

const WithDrawal = () => {
  const moveTo = useMoveRoute();

  const handleWithDrawal = () => {
    memberAPI.Withdrawal();
    moveTo('join');
  };
  return (
    <div className="p-3">
      <h1 className="mb-1 mt-5 text-xl font-extrabold">회원탈퇴 하시겠어요?</h1>
      <h1 className="mb-5 text-danger ">
        회원님과 관련된 모든 정보가 삭제됩니다
      </h1>
      <button
        className="btn btn-danger w-full"
        onClick={handleWithDrawal}
      >
        회원탈퇴
      </button>
    </div>
  );
};
export default WithDrawal;
