import { MouseEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import roomAPI from '@/core/api/functions/roomAPI';
import { roomOptions } from '@/core/api/options';
import { useRouteData } from '@/core/hooks';
import { BottomSheet } from '@/shared/BottomSheet';
import { BottomSheetProps } from '@/shared/BottomSheet/components/BottomSheet';
import { Toast } from '@/shared/Toast';
import { FormCertificationImage } from '../types/type';
import ImageInput from './ImageInput';

interface CertificationBottomSheetProps {
  bottomSheetProps: BottomSheetProps;
  myCertificationImage?: { routineId: number; image: string }[];
  close: () => void;
  routines: { routineId: number; content: string }[];
}

const CertificationBottomSheet = ({
  bottomSheetProps,
  myCertificationImage,
  routines,
  close
}: CertificationBottomSheetProps) => {
  const {
    params: { roomId }
  } = useRouteData();
  const { watch, handleSubmit } = useFormContext<FormCertificationImage[]>();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: roomAPI.postRoutineCertificate
  });

  const handleFormSubmit = async (data: FormCertificationImage[]) => {
    const formData = new FormData();
    const dataObjectArray = Object.entries(data);

    dataObjectArray.forEach(([key, value], idx) => {
      if (value.file && value.file.length > 0) {
        formData.append(`certifyRoomsRequest[${idx}].image`, value.file[0]);
        formData.append(
          `certifyRoomsRequest[${idx}].routineId`,
          `${routines[Number(key)].routineId}`
        );
      }
    });

    mutate(
      {
        roomId: roomId || '',
        body: formData
      },
      {
        onSuccess: () => {
          close();
          Toast.show({
            message: '인증이 완료되었습니다',
            status: 'confirm',
            subText: '인증사진 보러가기에서 확인 가능해요!'
          });
          queryClient.invalidateQueries({
            queryKey: roomOptions.detail(roomId || '').queryKey
          });
        },
        onError: (error) => {
          Toast.show({
            message: error.response?.data?.message ?? '오류가 발생했어요.',
            status: 'danger'
          });
        }
      }
    );
  };

  const handleEditButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    // TODO : 인증 사진 수정 로직
    e.preventDefault();
    const files = watch();
    const formData = new FormData();

    for (const [key, value] of Object.entries(files)) {
      if (value.file && value.file.length > 0) {
        formData.append(`${routines[Number(key)].routineId}`, value.file[0]);
      }
    }
    mutate(
      {
        roomId: roomId || '',
        body: formData
      },
      {
        onSuccess: () => {
          close();
        },
        onError: (error) => {
          Toast.show({
            message: error.response?.data?.message ?? '오류가 발생했어요.',
            status: 'danger'
          });
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
                image={myCertificationImage && myCertificationImage[idx]?.image}
                idx={idx}
              />
            );
          })}
        </form>
        <span className="mb-[1rem] block font-IMHyemin-bold text-xs text-dark-gray">
          다른 새들이 알아볼 수 있게 찍어주세요!
        </span>
        <button
          className="btn dark:btn-dark-point btn-light-point w-full"
          type="submit"
          form="certificationForm"
        >
          인증!
        </button>
      </div>
    </BottomSheet>
  );
};

export default CertificationBottomSheet;
