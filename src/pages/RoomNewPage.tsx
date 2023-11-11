import { FormProvider } from 'react-hook-form';
import { useFunnel, Funnel } from '@/shared/Funnel';
import { Header } from '@/shared/Header';
import {
  BirdStep,
  PasswordStep,
  RoutineStep,
  SummaryStep,
  TimeStep,
  useFormManagement,
  Navbar
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
  const { form, mutation, handleSubmit } = useFormManagement();

  return (
    <FormProvider {...form}>
      <form
        className="flex h-full flex-col"
        onSubmit={handleSubmit}
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
          isPending={mutation.isPending}
        />
      </form>
    </FormProvider>
  );
};

export default RoomNewPage;
