import { useSuspenseQuery } from '@tanstack/react-query';
import { Controller, FormProvider } from 'react-hook-form';
import ReactTextareaAutosize from 'react-textarea-autosize';
import clsx from 'clsx';
import { roomOptions } from '@/core/api/options';
import { Input } from '@/shared/Input';
import { LoadingSpinner } from '@/shared/LoadingSpinner';
import { formatHourString } from '@/domain/TimePicker/utils/hour';
import { TIME_RANGE, FORM_LITERAL } from '@/domain/RoomForm/constants/literals';
import { UserCount, Password } from '@/domain/RoomForm';
import { TimePicker } from '@/domain/TimePicker';
import useRoomForm from '../hooks/useRoomForm';

interface RoomTabProps {
  roomId: string;
}

const RoomTab = ({ roomId }: RoomTabProps) => {
  const { data: room } = useSuspenseQuery({
    ...roomOptions.detail(roomId),
    select: (data) => ({
      ...data,
      // 24시를 초과한다면 TimePicker가 인식할 수 있도록 +24를 해줍니다.
      certifyTime:
        data.certifyTime < TIME_RANGE['MORNING'][0]
          ? data.certifyTime + 24
          : data.certifyTime
    }),
    staleTime: Infinity
  });

  const { form, handleSubmit, mutation } = useRoomForm({
    roomId,
    defaultValues: {
      title: room.title,
      announcement: room.announcement ?? '',
      certifyTime: room.certifyTime,
      routines: room.routines.map((r) => ({ value: r.content })),
      userCount: room.maxUserCount,
      password: ''
    }
  });

  const {
    register,
    setValue,
    control,
    formState: { errors }
  } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
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
            maxLength={FORM_LITERAL.title.max.value}
          />
          {errors.title && (
            <p className={errorStyle}>{errors.title?.message}</p>
          )}
        </section>

        <Controller
          name="announcement"
          control={control}
          render={({ field }) => (
            <section className={sectionStyle}>
              <label
                className={clsx(labelStyle, 'flex justify-between')}
                htmlFor="announcement"
              >
                <b>공지사항</b>
                <p className="text-xs text-gray-400">
                  {field.value.length} / {FORM_LITERAL.announcement.max.value}
                </p>
              </label>
              <ReactTextareaAutosize
                className={clsx(
                  'w-full resize-none p-3 text-sm',
                  'rounded-lg border border-gray-300 shadow-sm placeholder:text-gray-400',
                  'focus:border-light-point focus:outline-none focus:ring-1 focus:ring-light-point',
                  'dark:bg-dark-sub dark:focus:border-dark-point dark:focus:ring-dark-point'
                )}
                minRows={3}
                maxLength={FORM_LITERAL.announcement.max.value}
                id="announcement"
                {...field}
              />
              {errors.announcement && (
                <p className={errorStyle}>{errors.announcement?.message}</p>
              )}
            </section>
          )}
        />

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
          <label className={labelStyle}>인원</label>
          <UserCount />
        </section>

        <section className={sectionStyle}>
          <label className={labelStyle}>비밀번호</label>
          <Password placeholder="비워두시면 기존의 비밀번호가 적용됩니다" />
        </section>

        <button
          className={clsx(
            'btn btn-light-point mb-24 flex h-12 w-full items-center justify-center text-xl dark:bg-dark-point',
            mutation.isPending && 'cursor-not-allowed'
          )}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? <LoadingSpinner size="3xl" /> : '수정하기'}
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
