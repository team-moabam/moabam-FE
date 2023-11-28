import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import roomAPI from '@/core/api/functions/roomAPI';
import { RoomSemiInfo } from '@/core/types/Room';
import { PasswordInput } from '@/shared/Input';
import { Toast } from '@/shared/Toast';
import RoomRoutineList from './RoomRoutineList';

const RoomPreview = ({
  routines,
  certifyTime,
  roomId,
  maxUserCount,
  currentUserCount
}: RoomSemiInfo) => {
  const canJoin = maxUserCount - currentUserCount >= 1;
  const { handleSubmit, register } = useForm<{ password: string }>({
    mode: 'onSubmit',
    defaultValues: { password: '' }
  });

  const { mutate } = useMutation({
    mutationFn: roomAPI.postRoomJoin
  });

  const queryClient = useQueryClient();

  const joinTheRoom = (data: { password: string }) => {
    mutate(
      { roomId: `${roomId}`, body: data },
      {
        onSuccess: () => {
          Toast.show({ status: 'confirm', message: '방에 참가하였습니다' });
          ['rooms', 'checkRoomJoin'] as const,
            queryClient.invalidateQueries({ queryKey: ['room'] });
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
                'text-light-point dark:text-dark-point': canJoin,
                'text-danger': !canJoin
              })
            )}
          >
            {canJoin ? '참가 가능!' : '꽉찼어요...'}
          </span>
        </div>
        {canJoin ? (
          <form onSubmit={handleSubmit(joinTheRoom)}>
            <div className="mb-[1.06rem]">
              <PasswordInput
                placeholder="비밀번호"
                {...register('password', {
                  required: true
                })}
              />
            </div>

            <button className="btn btn-light-point dark:btn-dark-point w-full">
              가입
            </button>
          </form>
        ) : (
          <button className="btn btn-disabled w-full">다음 기회에...</button>
        )}
      </div>
    </>
  );
};

export default RoomPreview;
