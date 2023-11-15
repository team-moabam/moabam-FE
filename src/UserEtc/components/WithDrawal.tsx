import { useRef } from 'react';
import { Input } from '@/shared/Input';

const WithDrawal = () => {
  const ref = useRef<HTMLInputElement>(null);
  const handleWithDrawal = () => {
    console.log(ref.current?.value);
  };
  return (
    <div className="p-3">
      <h1 className="mb-1 mt-5 text-xl font-extrabold">회원탈퇴 하시겠어요?</h1>
      <h1 className="mb-5 text-danger ">
        회원님과 관련된 모든 정보가 삭제됩니다
      </h1>
      <h1>정말 원하신다면 연동 계정의 이메일을 적어주세요 </h1>
      <Input
        size="sm"
        ref={ref}
        className="my-3"
      />
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
