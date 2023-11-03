import SelectPassword from '@/RoomCreate/steps/SelectPassword';
import SelectRoom from '@/RoomCreate/steps/SelectRoom';
import SelectTime from '@/RoomCreate/steps/SelectTime';
import SelectDetail from '@/RoomCreate/steps/SelectDetail';
import Summary from '@/RoomCreate/steps/Summary';
import { useFunnel, Funnel } from '@/shared/Funnel';
import Navbar from '@/RoomCreate/components/Navbar';
import { Header } from '@/shared/Header';

const RoomCreate = () => {
  const steps = [
    '방선택',
    '인증시간',
    '루틴정보',
    '비밀번호',
    '마무리'
  ] as const;

  const funnel = useFunnel(steps);

  return (
    <div className="flex h-full flex-col">
      <Header prev="#" />
      <main className="grow px-8 py-12">
        <Funnel {...funnel}>
          <Funnel.Step<typeof steps> name="방선택">
            <SelectRoom />
          </Funnel.Step>
          <Funnel.Step<typeof steps> name="인증시간">
            <SelectTime />
          </Funnel.Step>
          <Funnel.Step<typeof steps> name="루틴정보">
            <SelectDetail />
          </Funnel.Step>
          <Funnel.Step<typeof steps> name="비밀번호">
            <SelectPassword />
          </Funnel.Step>
          <Funnel.Step<typeof steps> name="마무리">
            <Summary />
          </Funnel.Step>
        </Funnel>
      </main>
      <Navbar {...funnel} />
    </div>
  );
};

export default RoomCreate;
