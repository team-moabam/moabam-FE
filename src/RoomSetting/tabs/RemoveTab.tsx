import { useState } from 'react';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import roomAPI from '@/core/api/functions/roomAPI';
import { useMoveRoute } from '@/core/hooks';
import { Input } from '@/shared/Input';
import { LoadingSpinner } from '@/shared/LoadingSpinner';

interface RemoveTabProps {
  roomId: string;
}

const RemoveTab = ({ roomId }: RemoveTabProps) => {
  const [confirmInput, setConfirmInput] = useState('');
  const moveTo = useMoveRoute();

  const { data: room } = useSuspenseQuery({
    ...roomOptions.detail(roomId),
    staleTime: Infinity
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: roomAPI.deleteRoom
  });

  const handleRemove = () => {
    mutate(roomId, {
      onSuccess: () => {
        moveTo('routines');
        // TODO: 토스트 메시지로 방을 삭제했음을 알려야 해요.
      },
      onError: (err) => console.error(err)
    });
  };

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
        <section className="mt-4 flex flex-col gap-2">
          <label
            htmlFor="confirm"
            className={descriptionStyle}
          >
            방의 이름 "{room.title}" 을 적어주세요.
          </label>
          <Input
            id="confirm"
            value={confirmInput}
            placeholder={room.title}
            onChange={(e) => setConfirmInput(e.target.value)}
          />
        </section>
        {error && (
          <p className="ml-2 mt-2 text-base text-danger">
            {error.response?.data.message}
          </p>
        )}
        <button
          className="btn btn-danger mt-8 flex w-full items-start justify-center"
          onClick={handleRemove}
          disabled={confirmInput !== room.title}
        >
          {isPending ? <LoadingSpinner size="2xl" /> : '방 삭제'}
        </button>
      </>
    );
  }
};

export default RemoveTab;

// 헤딩에 적용할 스타일
const headingStyle = 'text-xl font-bold';

// 회색으로 간결한 설명을 적을 때 적용할 스타일
const descriptionStyle = 'text-base text-dark-gray';
