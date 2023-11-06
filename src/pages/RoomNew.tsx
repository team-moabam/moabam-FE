import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
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

const RoomNew = () => {
  const funnel = useFunnel(steps);

  const form = useForm<Inputs>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(formSchema)
  });

  const { mutate: postRoom } = useMutation({
    mutationFn: roomAPI.postRoom
  });
  // TODO: API 요청하는 코드를 추후에 작성해야 합니다.
  // TODO: certifyTime 필드는 % 24 로 계산한 뒤에 보내야 합니다.

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
          console.log(data);
        },
        onError: (error) => {
          console.error(error);
          // if (axios.isAxiosError(error)) {
          // }
        }
      }
    );
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => console.error(errors);

  return (
    <form
      className="flex h-full flex-col"
      onSubmit={form.handleSubmit(onSubmit, onError)}
    >
      <FormProvider {...form}>
        <Header
          className="bg-light-main"
          prev="#"
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
        <Navbar {...funnel} />
      </FormProvider>
    </form>
  );
};

export default RoomNew;
