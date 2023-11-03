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

const RoomNew = () => {
  const steps = [
    'BirdStep',
    'TimeStep',
    'RoutineStep',
    'PasswordStep',
    'SummaryStep'
  ] as const;

  const funnel = useFunnel(steps);

  return (
    <div className="flex h-full flex-col">
      <Header
        prev="#"
        title="방 만들기"
        className="bg-light-main"
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
    </div>
  );
};

export default RoomNew;
