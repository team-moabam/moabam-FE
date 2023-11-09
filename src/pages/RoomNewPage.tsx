import { useMutation } from '@tanstack/react-query';
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  FormProvider
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import roomAPI from '@/core/api/functions/roomAPI';
import { Inputs, defaultValues, formSchema } from '@/RoomNew/constants/form';
import { useFunnel, Funnel } from '@/shared/Funnel';
import Navbar from '@/RoomNew/components/Navbar';
import { Header } from '@/shared/Header';
import {
  BirdStep,
  PasswordStep,
  RoutineStep,
  SummaryStep,
  TimeStep
} from '@/RoomNew';

export const steps = [
  'BirdStep',
  'TimeStep',
  'RoutineStep',
  'PasswordStep',
  'SummaryStep'
] as const;

const RoomNewPage = () => {
  const funnel = useFunnel(steps);

  const form = useForm<Inputs>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(formSchema)
  });

  const { mutate: postRoom, isPending } = useMutation({
    mutationFn: roomAPI.postRoom
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    postRoom(
      {
        title: data.title,
        password: data.password,
        type: data.type,
        routine: data.routines.map((r) => r.value),
        certifyTime: data.certifyTime % 24,
        maxUserCount: data.userCount
      },
      {
        onSuccess: (data) => {
          // TODO: 성공 Toast 메시지를 보여줘야 해요.
          // TODO: toast({ message: '방이 생성되었습니다.', type: 'success' });
          console.log(data.message);

          // TODO: 방 상세 페이지로 redirect 해야 해요.
          console.log('TODO: 방 상세 페이지로 redirect');
        },
        onError: (error) => {
          // TODO: 에러 Toast 메시지를 보여줘야 해요.
          // TODO: toast({ message: '서버에서 날아온 에러 메시지.', type: 'error' });
          console.log(error.response?.data?.message);

          if (error.response?.data?.validation) {
            const { setError } = form;

            const {
              title,
              password,
              type,
              routine,
              certifyTime,
              maxUserCount
            } = error.response.data.validation;

            setError('title', { message: title });
            setError('password', { message: password });
            setError('type', { message: type });
            setError('routines', { message: routine });
            setError('certifyTime', { message: certifyTime });
            setError('userCount', { message: maxUserCount });
          }

          if (error.response?.status === 401) {
            // TODO: 로그인 페이지로 redirect 해야 해요.
            console.log('TODO: 로그인 페이지로 redirect');
          }
        }
      }
    );
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => console.error(errors);

  return (
    <FormProvider {...form}>
      <form
        className="flex h-full flex-col"
        onSubmit={form.handleSubmit(onSubmit, onError)}
      >
        <Header
          className="bg-light-main"
          prev="routines"
          title="방 만들기"
        />
        <main className="grow overflow-auto px-8 py-12">
          <Funnel {...funnel}>
            <Funnel.Step<typeof steps> name="BirdStep">
              <BirdStep />
            </Funnel.Step>
            <Funnel.Step<typeof steps> name="TimeStep">
              <TimeStep />
            </Funnel.Step>
            <Funnel.Step<typeof steps> name="RoutineStep">
              <RoutineStep />
            </Funnel.Step>
            <Funnel.Step<typeof steps> name="PasswordStep">
              <PasswordStep />
            </Funnel.Step>
            <Funnel.Step<typeof steps> name="SummaryStep">
              <SummaryStep />
            </Funnel.Step>
          </Funnel>
        </main>
        <Navbar
          {...funnel}
          isPending={isPending}
        />
      </form>
    </FormProvider>
  );
};

export default RoomNewPage;
