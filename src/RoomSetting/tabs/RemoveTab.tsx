import { useSuspenseQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { Input } from '@/shared/Input';

interface RemoveTabProps {
  roomId: string;
}

const RemoveTab = ({ roomId }: RemoveTabProps) => {
  const { data: room } = useSuspenseQuery({
    ...roomOptions.detail(roomId),
    staleTime: Infinity
  });

  if (room.currentUserCount > 1) {
    return (
      <>
        <h1 className={headingStyle}>
          <p className="font-bold">방에 혼자 남았을 때만</p>
          <p className="font-bold">삭제할 수 있어요.</p>
        </h1>
      </>
    );
  } else {
    return (
      <>
        <h1 className={headingStyle}>방을 삭제할까요?</h1>
        <section className="my-6 flex flex-col gap-2">
          <label className={descriptionStyle}>방의 이름을 적어주세요</label>
          <Input size="sm" />
        </section>
        <button className="btn btn-danger w-full">방 삭제</button>
      </>
    );
  }
};

export default RemoveTab;

// 헤딩에 적용할 스타일
const headingStyle = 'text-xl font-bold';

// 회색으로 간결한 설명을 적을 때 적용할 스타일
const descriptionStyle = 'text-base text-dark-gray';
