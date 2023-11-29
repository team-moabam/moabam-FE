import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import roomAPI from '@/core/api/functions/roomAPI';
import { RoomSemiInfo } from '@/core/types/Room';
import { roomOptions } from '@/core/api/options';
import { PasswordInput } from '@/shared/Input';
import { Toast } from '@/shared/Toast';
import RoomRoutineList from './RoomRoutineList';

const RoomPreview = ({
  routines,
  certifyTime,
  roomId,
  maxUserCount,
  currentUserCount,
  isPassword
}: RoomSemiInfo) => {
  const canNotJoin = maxUserCount - currentUserCount < 1;
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<{ password: string }>({
    mode: 'onSubmit',
    defaultValues: { password: '' }
  });

  const { mutate } = useMutation({
    mutationFn: roomAPI.postRoomJoin
  });

  const queryClient = useQueryClient();

  const joinTheRoomWithPassword = (data: { password: string }) => {
    mutate(
      { roomId: `${roomId}`, body: data },
      {
        onSuccess: () => {
          Toast.show({ status: 'confirm', message: '방에 참가하였습니다' });
          queryClient.invalidateQueries({
            queryKey: roomOptions.checkRoomJoin().queryKey
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

  const joinTheRoomNonPassword = () => {
    mutate(
      { roomId: `${roomId}`, body: { password: null } },
      {
        onSuccess: () => {
          Toast.show({ status: 'confirm', message: '방에 참가하였습니다' });
          queryClient.invalidateQueries({
            queryKey: roomOptions.checkRoomJoin().queryKey
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

  return (
    <>
      <RoomRoutineList
        routines={routines}
        certifyTime={certifyTime}
      />
      <div className="mt-[2.56rem] flex-col">
        <div className="mb-[1.3rem] flex items-center">
          <span className="mr-[0.812rem] block font-IMHyemin-bold text-sm">
            현재 인원 {currentUserCount}/{maxUserCount}
          </span>
          <span
            className={twMerge(
              clsx('font-IMHyemin-bold text-[0.625rem]', {
                'text-light-point dark:text-dark-point': !canNotJoin,
                'text-danger': canNotJoin
              })
            )}
          >
            {canNotJoin ? '꽉찼어요...' : '참가 가능!'}
          </span>
        </div>
        {canNotJoin ? (
          <button className="btn btn-disabled w-full">다음 기회에...</button>
        ) : isPassword ? (
          <form onSubmit={handleSubmit(joinTheRoomWithPassword)}>
            <div className="mb-[1.06rem]">
              <PasswordInput
                placeholder="비밀번호"
                {...register('password', {
                  required: '비밀번호를 입력해주세요'
                })}
                className={clsx({
                  'ring-1 border-danger ring-danger focus:border-danger focus:ring-danger dark:focus:border-danger  dark:focus:ring-danger':
                    errors?.password?.message
                })}
              />
              <span className="mt-3 block text-sm text-danger">
                {errors?.password?.message}
              </span>
            </div>

            <button className="btn btn-light-point dark:btn-dark-point w-full">
              가입
            </button>
          </form>
        ) : (
          <button
            onClick={joinTheRoomNonPassword}
            type="button"
            className="btn btn-light-point dark:btn-dark-point w-full"
          >
            가입
          </button>
        )}
      </div>
    </>
  );
};

export default RoomPreview;
