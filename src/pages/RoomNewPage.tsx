import { FormProvider } from 'react-hook-form';
import { motion } from 'framer-motion';
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

const stepComponents: Record<(typeof steps)[number], JSX.Element> = {
  BirdStep: <BirdStep />,
  TimeStep: <TimeStep />,
  RoutineStep: <RoutineStep />,
  PasswordStep: <PasswordStep />,
  SummaryStep: <SummaryStep />
};

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
            {steps.map((step) => (
              <Step
                key={step}
                name={step}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: 'easeInOut', duration: 0.25 }}
                >
                  {stepComponents[step]}
                </motion.div>
              </Step>
            ))}
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
