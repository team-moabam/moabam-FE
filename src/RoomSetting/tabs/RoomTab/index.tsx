import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FormProvider
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatHourString } from '@/TimePicker/utils/hour';
import {
  Inputs,
  defaultValues,
  formSchema
} from '@/RoomSetting/constants/form';
import { errorStyle, inputSectionStyle, labelStyle } from './styles';
import RoutineSection from './RoutineSection';
import MemberSection from './MemberSection';
import PasswordSection from './PasswordSection';
import { Input } from '@/shared/Input';
import { TIME_RANGE } from '@/RoomNew';
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
    formState: { errors }
  } = form;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => console.error(errors);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <section className={inputSectionStyle}>
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

        <section className={inputSectionStyle}>
          <label
            className={labelStyle}
            htmlFor="announcement"
          >
            공지사항
          </label>
          <Input
            id="announcement"
            {...register('announcement')}
          />
          {errors.announcement && (
            <p className={errorStyle}>{errors.announcement?.message}</p>
          )}
        </section>

        <section className={inputSectionStyle}>
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

        <section className={inputSectionStyle}>
          <RoutineSection />
        </section>

        <section className={inputSectionStyle}>
          <MemberSection />
        </section>

        <section className={inputSectionStyle}>
          <PasswordSection />
        </section>

        <button className="btn btn-transition btn-light-point mb-24 w-full text-xl">
          적용
        </button>
      </form>
    </FormProvider>
  );
};

export default RoomTab;