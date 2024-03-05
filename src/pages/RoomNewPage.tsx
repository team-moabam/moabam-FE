import { FormProvider } from 'react-hook-form';
import { createFunnel } from '@/shared/Funnel';
import { Header } from '@/shared/Header';
import {
  BirdStep,
  PasswordStep,
  RoutineStep,
  SummaryStep,
  TimeStep,
  useRoomForm,
  Navbar
} from '@/domain/RoomNew';

export const steps = [
  'BirdStep',
  'TimeStep',
  'RoutineStep',
  'PasswordStep',
  'SummaryStep'
] as const;

const { Funnel, Step, useFunnel } = createFunnel(steps);

const RoomNewPage = () => {
  const funnel = useFunnel();
  const { form, mutation, handleSubmit } = useRoomForm();

  return (
    <FormProvider {...form}>
      <form
        className="flex h-full flex-col"
        onSubmit={handleSubmit}
      >
        <Header
          className="bg-light-main dark:bg-dark-main"
          prev
          title="방 만들기"
        />
        <main className="grow overflow-auto px-8 py-12">
          <Funnel {...funnel}>
            <Step name="BirdStep">
              <BirdStep />
            </Step>
            <Step name="TimeStep">
              <TimeStep />
            </Step>
            <Step name="RoutineStep">
              <RoutineStep />
            </Step>
            <Step name="PasswordStep">
              <PasswordStep />
            </Step>
            <Step name="SummaryStep">
              <SummaryStep />
            </Step>
          </Funnel>
        </main>
        <Navbar
          funnel={funnel}
          isPending={mutation.isPending}
        />
      </form>
    </FormProvider>
  );
};

export default RoomNewPage;
