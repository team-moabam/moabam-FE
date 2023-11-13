import { ModalHeadingStyle, descriptionStyle } from './styles';
import { Input } from '@/shared/Input';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';

interface KickButtonProps {}

const KickButton = () => {
  const { bottomSheetProps, open } = useBottomSheet();

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
          <b>
            <span className="font-bold text-light-point dark:text-dark-point">
              니나 잘해
            </span>
            님을
          </b>
          <b>
            <span className="font-bold text-danger">추방</span>하시겠어요?
          </b>
        </h1>
        <p className={descriptionStyle}>바쁜 일이 있었던 걸지도 몰라요.</p>
        <section className="mb-6 mt-10 flex flex-col gap-2">
          <label
            htmlFor="nickname"
            className="text-base"
          >
            추방하려는 멤버의 닉네임을 적어주세요.
          </label>
          <Input id="nickname" />
        </section>
        <button className="btn btn-danger w-full">추방</button>
      </BottomSheet>
    </>
  );
};

export default KickButton;
