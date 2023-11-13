import { ModalHeadingStyle, descriptionStyle } from './styles';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';

interface DelegationButtonProps {
  memberId: string;
  nickname: string;
}

const DelegationButton = ({ memberId, nickname }: DelegationButtonProps) => {
  const { bottomSheetProps, open } = useBottomSheet();

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
          <b>{nickname} 님에게</b>
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
        <button className="btn btn-light-point dark:btn-dark-point mt-6 w-full">
          방장 위임
        </button>
      </BottomSheet>
    </>
  );
};

export default DelegationButton;
