import { MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import roomAPI from '@/core/api/functions/roomAPI';
import { FormCertificationImage } from '../types/type';
import ImageInput from './ImageInput';
import { BottomSheet } from '@/shared/BottomSheet';
import { BottomSheetProps } from '@/shared/BottomSheet/components/BottomSheet';
import { queryClient } from '@/main';

interface CertificationBottomSheetProps {
  bottomSheetProps: BottomSheetProps;
  myCertificationImage?: { routineId: number; image: string }[];
  close: () => void;
  routines: { routineId: number; content: string }[];
}

const CertificationBottomSheet = ({
  bottomSheetProps,
  myCertificationImage,
  routines
}: CertificationBottomSheetProps) => {
  const { pathname } = useLocation();
  const roomId = pathname.split('/')[2];
  const { watch, handleSubmit } = useFormContext<FormCertificationImage[]>();

  const mutation = useMutation({
    mutationFn: roomAPI.postRoutineCertificate
  });

  const handleFormSubmit = async (data: FormCertificationImage[]) => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (value.file) {
        formData.append(`${routines[Number(key)].routineId}`, value.file[0]);
      }
    }

    mutation.mutate(
      {
        roomId,
        body: formData
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['rooms', 'detail', roomId]
          });
          close();
        },
        onError: () => {
          // TODO : 에러 처리
        }
      }
    );
  };

  const handleEditButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const files = watch();
    const formData = new FormData();

    for (const [key, value] of Object.entries(files)) {
      if (value.file && value.file.length > 0) {
        formData.append(`${routines[Number(key)].routineId}`, value.file[0]);
      }
    }
    mutation.mutate(
      {
        roomId,
        body: formData
      },
      {
        onSucces: () => {
          close();
        },
        onError: () => {
          // TODO : 에러 처리
        }
      }
    );
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
          {routines.map(({ routineId, content }, idx) => {
            return (
              <ImageInput
                key={routineId}
                content={content}
                image={myCertificationImage && myCertificationImage[idx].image}
                idx={idx}
              />
            );
          })}
        </form>
        <span className="mb-[1rem] block font-IMHyemin-bold text-xs text-dark-gray">
          다른 새들이 알아볼 수 있게 찍어주세요!
        </span>
        {myCertificationImage?.filter((el) => el.image).length ===
        routines.length ? (
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
