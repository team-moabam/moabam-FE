import { useMutation } from '@tanstack/react-query';
import roomAPI from '@/core/api/functions/roomAPI';
import { useMoveRoute } from '@/core/hooks';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';
import { LoadingSpinner } from '@/shared/LoadingSpinner';
import { Toast } from '@/shared/Toast';
import { ModalHeadingStyle, descriptionStyle, errorStyle } from './styles';

interface DelegationButtonProps {
  roomId: string;
  memberId: number;
  nickname: string;
}

const DelegationButton = ({
  roomId,
  memberId,
  nickname
}: DelegationButtonProps) => {
  const { bottomSheetProps, open } = useBottomSheet();

  const { mutate, isPending, error } = useMutation({
    mutationFn: roomAPI.putDelegateMaster
  });

  const moveTo = useMoveRoute();

  const handleDelegation = () => {
    mutate(
      { roomId, memberId },
      {
        onSuccess: () => {
          moveTo('roomDetail');
          Toast.show({ message: '방장을 위임했어요.', status: 'confirm' });
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
        className="btn btn-light-point dark:btn-dark-point rounded-2xl px-3 py-1"
        onClick={open}
      >
        방장 위임
      </button>
      <BottomSheet
        {...bottomSheetProps}
        className="p-6"
      >
        <h1 className={ModalHeadingStyle}>
          <b>"{nickname}" 님에게</b>
          <b>
            <span className="font-bold text-light-point dark:text-dark-point">
              방장을 위임
            </span>
            하시겠어요?
          </b>
        </h1>
        <p className={descriptionStyle}>
          위임 후, 관리 페이지에서 자동으로 나가집니다.
        </p>
        {error && <p className={errorStyle}>{error.response?.data.message}</p>}
        <button
          className="btn btn-light-point dark:btn-dark-point mt-6 flex w-full items-center justify-center"
          onClick={handleDelegation}
          disabled={isPending}
        >
          {isPending ? <LoadingSpinner size="2xl" /> : '방장 위임'}
        </button>
      </BottomSheet>
    </>
  );
};

export default DelegationButton;
