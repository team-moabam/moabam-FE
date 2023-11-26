import { useMutation } from '@tanstack/react-query';
import roomAPI from '@/core/api/functions/roomAPI';
import { useMoveRoute } from '@/core/hooks';
import RoomCalendar from './RoomCalendar';
import CertificationProgress from './CertificationProgress';
import RoomRoutine from './RoomRoutine';
import RoomMembers from './RoomMembers';
import { Toast } from '@/shared/Toast';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';
import { Tab, TabItem } from '@/shared/Tab';
import { RoomInfo } from '@/core/types/Room';

interface extendedProps {
  status: 'pending' | 'error' | 'success';
  serverTime: Date;
}

type RoomWorkspaceProps = extendedProps & RoomInfo;

const RoomWorkspace = ({
  completePercentage,
  routine,
  todayCertificateRank,
  certifiedDates,
  certifyTime,
  status,
  serverTime,
  roomId
}: RoomWorkspaceProps) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const moveTo = useMoveRoute();

  const myCertificationImage = todayCertificateRank.find(
    ({ memberId }) => memberId === '5'
  )?.certificationImage;

  const { mutate } = useMutation({
    mutationFn: roomAPI.deleteRoom
  });

  const handleRoomLeave = () => {
    mutate(`${roomId}`, {
      onSuccess: () => {
        close();
        moveTo('routines');
        Toast.show({ message: '방을 나갔습니다', status: 'confirm' });
      },
      onError: (err) => {
        console.error(err);
        Toast.show({
          message: err.response?.data.message ?? '오류가 발생했어요.',
          status: 'danger'
        });
      }
    });
  };

  return (
    <>
      {
        <BottomSheet {...bottomSheetProps}>
          <div className="mx-[1.37rem] mb-[1.31rem] mt-[3.37rem]">
            <h1 className="mb-1.5 font-IMHyemin-bold text-xl text-light-point dark:text-dark-point">
              방을 나가실래요?
            </h1>
            <span className="mb-[3.44rem] block text-sm">
              다시 돌아올 수는 있지만, 기여도는&nbsp;
              <strong className="text-danger">초기화</strong>됩니다.
            </span>
            <button
              className="btn btn-transition btn-danger w-full"
              onClick={handleRoomLeave}
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
          <RoomCalendar
            certifiedDates={certifiedDates}
            certifyTime={certifyTime}
            serverTime={serverTime}
          />
          {status !== 'success' ? (
            <div>임시 Loading...</div>
          ) : (
            <>
              <CertificationProgress percentage={completePercentage} />
              <RoomRoutine
                routines={routine}
                myCertificationImage={myCertificationImage}
              />
            </>
          )}
          <button
            className="mt-[1.19rem] text-sm text-black  dark:text-white"
            onClick={toggle}
          >
            방 나가기
          </button>
        </TabItem>
        <TabItem title="멤버">
          <RoomMembers members={todayCertificateRank} />
          <button className="mt-[1.62rem] text-sm text-black dark:text-white">
            신고하기
          </button>
        </TabItem>
      </Tab>
    </>
  );
};

export default RoomWorkspace;
