import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DateRoomDetailContext } from './RoomDetailProvider';
import RoomCalendar from './RoomCalendar';
import CertificationProgress from './CertificationProgress';
import RoomRoutine from './RoomRoutine';
import RoomMembers from './RoomMembers';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';
import { Tab, TabItem } from '@/shared/Tab';
import { Icon } from '@/shared/Icon';
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
  serverTime
}: RoomWorkspaceProps) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();

  const [reportStatus, setReportStatus] = useState<boolean>(false);

  const myCertificationImage = todayCertificateRank.find(
    ({ memberId }) => memberId === '5'
  )?.certificationImage;

  const { date: chooseDate } = useContext(DateRoomDetailContext);

  const changeReportStatus = (value: boolean) => {
    setReportStatus(value);
  };

  return (
    <>
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
              <CertificationProgress
                percentage={completePercentage}
                chooseDate={chooseDate}
                serverTime={serverTime}
              />
              <div className="flex justify-end">
                <Link
                  to={`log/${chooseDate.getFullYear()}${
                    chooseDate.getMonth() + 1
                  }${chooseDate.getDate()}`}
                  className="mb-[2.13rem] flex w-fit items-center text-sm text-light-point dark:text-dark-point"
                  state={{ todayCertificateRank, routine, chooseDate }}
                >
                  인증사진 보러가기
                  <Icon
                    size="2xl"
                    icon="BiChevronRight"
                  />
                </Link>
              </div>
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
          <RoomMembers
            members={todayCertificateRank}
            reportStatus={reportStatus}
            changeReportStatus={changeReportStatus}
          />
          <button
            className="mt-[1.62rem] text-sm text-black dark:text-white"
            onClick={() => {
              setReportStatus((prev) => !prev);
            }}
          >
            {reportStatus ? '취소하기' : '신고하기'}
          </button>
        </TabItem>
      </Tab>
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
            onClick={close}
          >
            나가기
          </button>
        </div>
      </BottomSheet>
    </>
  );
};

export default RoomWorkspace;
