import RoomCalendar from './RoomCalendar';
import RoomProgress from './CertificationProgress';
import RoomRoutine from './RoomRoutine';
import RoomMembers from './RoomMembers';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';
import { Tab, TabItem } from '@/shared/Tab';
import { RoomInfo } from '@/core/types/Room';

type RoomWorkspaceProps = {
  roomWorkspaceData: Pick<
    RoomInfo,
    'completePercentage' | 'certifiedDates' | 'routine' | 'todayCertificateRank'
  >;
};

const RoomWorkspace = ({ roomWorkspaceData }: RoomWorkspaceProps) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const { completePercentage, routine, todayCertificateRank } =
    roomWorkspaceData;

  // Todo : RoomCalendar data props

  return (
    <>
      {
        <BottomSheet {...bottomSheetProps}>
          <div className="mx-[1.37rem] mb-[1.31rem] mt-[3.37rem]">
            <h1 className="mb-[0.37rem] font-IMHyemin-bold text-[1.25rem] text-light-point dark:text-dark-point">
              방을 나가실래요?
            </h1>
            <span className="mb-[3.44rem] block text-[0.87rem]">
              다시 돌아올 수는 있지만, 기여도는&nbsp;
              <strong className="text-danger">초기화</strong>됩니다.
            </span>
            <button
              className="btn btn-transition btn-danger w-full"
              onClick={close}
            >
              나가기
            </button>
          </div>
        </BottomSheet>
      }
      <Tab
        align="center"
        defaultIndex={0}
      >
        <TabItem title="루틴">
          <RoomCalendar />
          <RoomProgress percentage={completePercentage} />
          <RoomRoutine routines={routine} />
          <button
            className="mt-[1.19rem] text-[0.87rem] text-black  dark:text-white"
            onClick={toggle}
          >
            방 나가기
          </button>
        </TabItem>
        <TabItem title="멤버">
          <RoomMembers members={todayCertificateRank} />
          <button className="mt-[1.62rem] text-[0.87rem] text-black dark:text-white">
            신고하기
          </button>
        </TabItem>
      </Tab>
    </>
  );
};

export default RoomWorkspace;
