import { MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormCertificationImage } from '../types/type';
import ImageInput from './ImageInput';
import { BottomSheet } from '@/shared/BottomSheet';
import { BottomSheetProps } from '@/shared/BottomSheet/components/BottomSheet';

const routine = [
  {
    routineId: 5,
    content: '물 마시기'
  },
  {
    routineId: 9,
    content: '아침 먹기'
  }
];
const certificationImage = [
  {
    routineId: 5,
    // image: 'https://picsum.photos/200'
    image: null
  },
  {
    routineId: 9,
    // image: 'https://picsum.photos/200'
    image: null
  }
];

interface CertificationBottomSheetProps {
  bottomSheetProps: BottomSheetProps;
  close: () => void;
}

const CertificationBottomSheet = ({
  bottomSheetProps
}: CertificationBottomSheetProps) => {
  const { watch, handleSubmit } = useFormContext<FormCertificationImage[]>();

  const handleFormSubmit = async (data: FormCertificationImage[]) => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (value.file) {
        formData.append(`${routine[Number(key)].routineId}`, value.file[0]);
      }
    }
    // TODO : Form Data 전송
  };

  const handleEditButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const files = watch();
    const formData = new FormData();

    for (const [key, value] of Object.entries(files)) {
      if (value.file && value.file.length > 0) {
        formData.append(`${routine[Number(key)].routineId}`, value.file[0]);
      }
    }
    // TODO : Form Data 전송
  };

  return (
    <BottomSheet
      {...bottomSheetProps}
      className="bg-light-main p-0 dark:bg-dark-main"
    >
      <div className="mx-8 mb-[1.88rem] mt-[1.71rem]  font-IMHyemin-bold text-black dark:text-white">
        <h1 className="mb-[1.27rem] font-IMHyemin-bold">
          모든 칸을 채워주세요
        </h1>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mb-8 grid grid-cols-2 gap-x-3 gap-y-[1.34rem] rounded-2xl text-black dark:text-white"
          id="certificationForm"
        >
          {routine.map(({ routineId, content }, idx) => {
            return (
              <ImageInput
                key={routineId}
                content={content}
                image={certificationImage[idx].image}
                idx={idx}
              />
            );
          })}
        </form>
        <span className="mb-[1rem] block font-IMHyemin-bold text-xs text-dark-gray">
          다른 새들이 알아볼 수 있게 찍어주세요!
        </span>
        {certificationImage.filter((el) => el.image).length ===
        routine.length ? (
          <button
            type="button"
            className="btn dark:btn-dark-point btn-light-point w-full"
            onClick={handleEditButtonClick}
            form="certificationForm"
          >
            수정
          </button>
        ) : (
          <button
            className="btn dark:btn-dark-point btn-light-point w-full"
            type="submit"
            form="certificationForm"
          >
            인증!
          </button>
        )}
      </div>
    </BottomSheet>
  );
};

export default CertificationBottomSheet;
