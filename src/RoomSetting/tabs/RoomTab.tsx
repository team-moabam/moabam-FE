import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FormProvider
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactTextareaAutosize from 'react-textarea-autosize';
import clsx from 'clsx';
import { formatHourString } from '@/TimePicker/utils/hour';
import {
  Inputs,
  defaultValues,
  formSchema
} from '@/RoomSetting/constants/form';
import { TIME_RANGE, ANNOUNCEMENT } from '@/RoomForm/constants/literals';
import { UserCount, Routines, Password } from '@/RoomForm';
import { Input } from '@/shared/Input';
import { TimePicker } from '@/TimePicker';

const RoomTab = () => {
  const form = useForm<Inputs>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(formSchema)
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = form;

  const watchAnnouncement = watch('announcement');

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
            <div>{formatHourString(TIME_RANGE['night'][0])}</div>
            <TimePicker
              range={TIME_RANGE['night']}
              initialTime={5}
              onChangeTime={(time) => setValue('certifyTime', time)}
            />
            <div>{formatHourString(TIME_RANGE['night'][1])}</div>
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
          <Password />
        </section>

        <button className="btn btn-transition btn-light-point mb-24 w-full text-xl">
          적용
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
