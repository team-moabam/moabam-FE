import { MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import ImageInput from './ImageInput';
import { BottomSheet } from '@/shared/BottomSheet';
import { BottomSheetProps } from '@/shared/BottomSheet/components/BottomSheet';
import { CertificationImage } from '@/core/types/Image';

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
const data = [
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

export type FormCertificationImage =
  | CertificationImage[]
  | { [key: string]: FileList };

interface CertificationBottomSheetProps {
  close: () => void;
  bottomSheetProps: BottomSheetProps;
}

const CertificationBottomSheet = ({
  close,
  bottomSheetProps
}: CertificationBottomSheetProps) => {
  const {
    register,
    watch,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm<FormCertificationImage>({
    mode: 'onSubmit',
    defaultValues: data
  });

  const onSubmit = async (data: FormCertificationImage) => {
    const formData = new FormData();

    console.log(data);

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value[0]);
    }

    // TODO : Form Data 전송
  };

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const files = watch();
    const formData = new FormData();

    for (const [key, value] of Object.entries(files)) {
      if (value[0]) {
        formData.append(key, value[0]);
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
          onSubmit={handleSubmit(onSubmit)}
          className="mb-8 grid grid-cols-2 gap-x-3 gap-y-[1.34rem] rounded-2xl text-black dark:text-white"
          id="certificationForm"
        >
          {routine.map(({ routineId, content }) => {
            const routineData = data.find(
              ({ routineId: id }) => routineId === id
            );

            return (
              <ImageInput
                key={routineId}
                routineId={routineId}
                imgData={routineData?.image}
                content={content}
                register={register}
                errors={errors}
                clearErrors={clearErrors}
              />
            );
          })}
        </form>
        <span className="mb-[1rem] block font-IMHyemin-bold text-xs text-dark-gray">
          다른 새들이 알아볼 수 있게 찍어주세요!
        </span>
        {data.filter((el) => el.image).length === routine.length ? (
          <button
            type="button"
            className="btn dark:btn-dark-point btn-light-point w-full"
            onClick={handleButtonClick}
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
