import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import {
  SubmitHandler,
  SubmitErrorHandler,
  useForm,
  FormProvider
} from 'react-hook-form';
import ReactTextareaAutosize from 'react-textarea-autosize';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { roomOptions } from '@/core/api/options';
import roomAPI from '@/core/api/functions/roomAPI';
import { formatHourString } from '@/TimePicker/utils/hour';
import { Inputs, formSchema } from '@/RoomSetting/constants/form';
import { TIME_RANGE, ANNOUNCEMENT } from '@/RoomForm/constants/literals';
import { UserCount, Routines, Password } from '@/RoomForm';
import { Input } from '@/shared/Input';
import { TimePicker } from '@/TimePicker';
import { LoadingSpinner } from '@/shared/LoadingSpinner';

interface RoomTabProps {
  roomId: number;
}

const RoomTab = ({ roomId }: RoomTabProps) => {
  const { data: room } = useSuspenseQuery({
    ...roomOptions.detail(roomId),
    staleTime: Infinity
  });

  const { mutate, isPending } = useMutation({
    mutationFn: roomAPI.putRoom
  });

  const form = useForm<Inputs>({
    defaultValues: {
      title: room.title,
      announcement: room.announcement,
      certifyTime: room.certifyTime,
      routines: room.routine.map((r) => ({ value: r.content })),
      userCount: room.maxUserCount,
      password: ''
    },
    mode: 'onBlur',
    resolver: zodResolver(formSchema)
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors }
  } = form;

  const watchAnnouncement = watch('announcement');

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(
      {
        roomId,
        title: data.title,
        announcement: data.announcement,
        certifyTime: data.certifyTime % 24,
        routine: data.routines.map((r) => r.value),
        maxUserCount: data.userCount,
        password: data.password
      },
      {
        onSuccess: (data) => console.log(data),
        onError: (error) => {
          // TODO: 에러 Toast 메시지를 보여줘야 해요.
          console.log(error.response?.data?.message);

          if (error.response?.data?.validation) {
            const {
              title,
              announcement,
              routine,
              password,
              certifyTime,
              maxUserCount
            } = error.response.data.validation;

            setError('title', { message: title });
            setError('announcement', { message: announcement });
            setError('routines', { message: routine });
            setError('password', { message: password });
            setError('certifyTime', { message: certifyTime });
            setError('userCount', { message: maxUserCount });
          }

          if (error.response?.status === 401) {
            // TODO: 로그인 페이지로 redirect 해야 해요.
            // TODO: 혹은 전역 MutationCache에 리다이렉션 관련 로직을 작업해야 해요.
            console.log('TODO: 로그인 페이지로 redirect');
          }
        }
      }
    );
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => console.error(errors);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <section className={sectionStyle}>
          <label
            className={labelStyle}
            htmlFor="title"
          >
            방 이름
          </label>
          <Input
            id="title"
            {...register('title')}
          />
          {errors.title && (
            <p className={errorStyle}>{errors.title?.message}</p>
          )}
        </section>

        <section className={sectionStyle}>
          <label
            className={clsx(labelStyle, 'flex justify-between')}
            htmlFor="announcement"
          >
            <b>공지사항</b>
            <p className="text-xs text-gray-400">
              {watchAnnouncement.length} / {ANNOUNCEMENT.max}
            </p>
          </label>
          <ReactTextareaAutosize
            className={clsx(
              'w-full resize-none p-3 text-sm',
              'rounded-lg border border-gray-300 shadow-sm placeholder:text-gray-400',
              'focus:border-light-point focus:outline-none focus:ring-1 focus:ring-light-point',
              'dark:focus:border-dark-point dark:focus:ring-dark-point'
            )}
            minRows={3}
            maxLength={ANNOUNCEMENT.max}
            id="announcement"
            {...register('announcement')}
          />
          {errors.announcement && (
            <p className={errorStyle}>{errors.announcement?.message}</p>
          )}
        </section>

        <section className={sectionStyle}>
          <label
            className={labelStyle}
            htmlFor="notice"
          >
            인증 시간
          </label>
          <div className="flex w-full flex-col items-center gap-6">
            <div>{formatHourString(TIME_RANGE[room.roomType][0])}</div>
            <TimePicker
              range={TIME_RANGE[room.roomType]}
              initialTime={room.certifyTime}
              onChangeTime={(time) => setValue('certifyTime', time)}
            />
            <div>{formatHourString(TIME_RANGE[room.roomType][1])}</div>
          </div>
          {errors.certifyTime && (
            <p className={errorStyle}>{errors.certifyTime?.message}</p>
          )}
        </section>

        <section className={sectionStyle}>
          <label className={labelStyle}>루틴 목록</label>
          <Routines />
        </section>

        <section className={sectionStyle}>
          <label className={labelStyle}>인원</label>
          <UserCount />
        </section>

        <section className={sectionStyle}>
          <label className={labelStyle}>비밀번호</label>
          <Password placeholder="비워두시면 기존의 비밀번호가 적용됩니다" />
        </section>

        <button
          className={clsx(
            'btn btn-light-point mb-24 flex h-12 w-full items-center justify-center text-xl',
            isPending && 'cursor-not-allowed'
          )}
          disabled={isPending}
        >
          {isPending ? <LoadingSpinner size="3xl" /> : '수정하기'}
        </button>
      </form>
    </FormProvider>
  );
};

export default RoomTab;

// 섹션 영역의 스타일
const sectionStyle = 'mb-10 flex flex-col';

// 인풋의 라벨에 적용할 스타일
const labelStyle = 'mb-2 font-bold';

// 에러 메시지를 표시할 때 적용할 스타일
const errorStyle = 'ml-2 mt-4 text-red-500 text-sm';
