import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import roomAPI from '@/core/api/functions/roomAPI';
import { Input } from '@/shared/Input';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';
import { LoadingSpinner } from '@/shared/LoadingSpinner';
import { Toast } from '@/shared/Toast';
import { ModalHeadingStyle, descriptionStyle } from './styles';

interface KickButtonProps {
  roomId: string;
  memberId: number;
  nickname: string;
}

const KickButton = ({ roomId, memberId, nickname }: KickButtonProps) => {
  const [confirmInput, setConfirmInput] = useState('');

  const { bottomSheetProps, open, close } = useBottomSheet();

  const { mutate, isPending, error } = useMutation({
    mutationFn: roomAPI.deleteKickUser
  });

  const handleKick = () => {
    mutate(
      { roomId, memberId },
      {
        onSuccess: () => {
          close();
          Toast.show({
            message: '멤버를 방에서 쫓아냈어요.',
            status: 'danger'
          });
        },
        onError: (err) => {
          console.error(err);
          Toast.show({
            message: err.response?.data.message ?? '오류가 발생했어요.',
            status: 'danger'
          });
        }
      }
    );
  };

  return (
    <>
      <button
        className="btn btn-danger rounded-2xl px-3 py-1"
        onClick={open}
      >
        추방
      </button>
      <BottomSheet
        {...bottomSheetProps}
        className="p-6"
      >
        <h1 className={ModalHeadingStyle}>
          <b>"{nickname}" 님을</b>
          <b>
            <span className="font-bold text-danger">추방</span>하시겠어요?
          </b>
        </h1>
        <p className={descriptionStyle}>바쁜 일이 있었던 걸지도 몰라요.</p>
        <section className="mt-10 flex flex-col gap-2">
          <label
            htmlFor="nickname"
            className="text-base"
          >
            추방하려는 멤버의 닉네임을 적어주세요.
          </label>
          <Input
            id="nickname"
            value={confirmInput}
            autoComplete="off"
            placeholder={nickname}
            onChange={(e) => setConfirmInput(e.target.value)}
          />
        </section>
        {error && (
          <p className="ml-2 mt-2 text-base text-danger">
            {error.response?.data.message}
          </p>
        )}
        <button
          className="btn btn-danger mt-6 flex w-full items-start justify-center"
          onClick={handleKick}
          disabled={confirmInput !== nickname || isPending}
        >
          {isPending ? <LoadingSpinner size="2xl" /> : '추방'}
        </button>
      </BottomSheet>
    </>
  );
};

export default KickButton;
