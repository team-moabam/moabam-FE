import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useBottomSheet } from '@/shared/BottomSheet';
import { RoutineList, RoutineItem } from '@/shared/RoutineList';
import { FormCertificationImage } from '../types/type';
import makeTodayCertifyTime from '../utils/makeTodayCertifyTime';
import checkCertifyTime from '../utils/checkCertifyTime';
import {
  CERTIFICATE_END_MINUTES,
  CERTIFICATE_START_MINUTES
} from '../constants/constant';
import CertificationBottomSheet from './CertificationBottomSheet';
import { DateRoomDetailContext } from './RoomDetailProvider';

interface RoomRoutineProps {
  certifyTime: number;
  routines: { routineId: number; content: string }[];
  myCertificationImage?: { routineId: number; image: string }[];
}

const RoomRoutine = ({
  routines,
  myCertificationImage,
  certifyTime
}: RoomRoutineProps) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const form = useForm<FormCertificationImage[]>({
    mode: 'onSubmit',
    defaultValues: myCertificationImage?.map(() => ({
      file: null
    }))
  });
  const { serverTime, chooseDate } = useContext(DateRoomDetailContext);
  const isTodayRoom = chooseDate.getDate() === serverTime.getDate();

  const {
    certificateTodayEndTime,
    certificateTodayStartTime,
    nowTime,
    certificateTodayEndTimeDate,
    certificateTodayStartTimeDate
  } = makeTodayCertifyTime(certifyTime, serverTime);
  const checkedCertifyTime = checkCertifyTime({
    nowTime,
    certificateTodayEndTime,
    certificateTodayStartTime
  });
  const isCertificatedRoutine =
    routines.length === myCertificationImage?.length;

  const certificateTimeText = `${
    certifyTime < 12 ? certifyTime : certifyTime - 12
  }:00${certifyTime < 12 ? 'AM' : 'PM'}`;
  const certificateDurationTimeText = `${certificateTodayStartTimeDate.getHours()}:${CERTIFICATE_START_MINUTES} ~ ${certificateTodayEndTimeDate.getHours()}:${CERTIFICATE_END_MINUTES}`;

  const handleToggle = () => {
    form.clearErrors();
    toggle();
  };

  return (
    <>
      <FormProvider {...form}>
        <CertificationBottomSheet
          bottomSheetProps={bottomSheetProps}
          close={close}
          myCertificationImage={myCertificationImage}
          routines={routines}
        />
      </FormProvider>
      <div className="mb-[0.88rem] flex justify-between text-base">
        <h4 className="text-black dark:text-white">개인 인증</h4>

        {isTodayRoom && checkedCertifyTime === 'beforeTodayCertifyTime' ? (
          <span className="text-dark-gray">인증 전</span>
        ) : isTodayRoom &&
          checkedCertifyTime === 'nowTodayCertifyTime' &&
          !isCertificatedRoutine ? (
          <span className="text-dark-gray">인증 중</span>
        ) : isCertificatedRoutine ? (
          <span className="text-light-point dark:text-dark-point">
            인증 성공
          </span>
        ) : !isCertificatedRoutine ? (
          <span className="text-danger">인증 실패</span>
        ) : (
          ''
        )}
      </div>
      <div className="rounded-lg bg-light-sub px-[1.31rem] py-4 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05)] dark:bg-dark-sub ">
        <span className="mb-[1.31rem] block text-dark-gray">
          {`${certificateTimeText} (${certificateDurationTimeText})`}
        </span>
        <RoutineList className="mb-8">
          {routines.map(({ routineId, content }) => (
            <RoutineItem
              key={routineId}
              contents={content}
              completed={
                (checkedCertifyTime === 'nowTodayCertifyTime' ||
                  checkedCertifyTime === 'afterTodayCertifyTime') &&
                isCertificatedRoutine
              }
            />
          ))}
        </RoutineList>
        {isTodayRoom &&
        checkedCertifyTime === 'nowTodayCertifyTime' &&
        isCertificatedRoutine ? (
          <button
            className="btn btn-light-point dark:btn-dark-point w-full rounded-lg text-base"
            onClick={handleToggle}
          >
            인증 수정하기!
          </button>
        ) : isTodayRoom &&
          checkedCertifyTime === 'nowTodayCertifyTime' &&
          !isCertificatedRoutine ? (
          <button
            className="btn btn-light-point dark:btn-dark-point w-full rounded-lg text-base"
            onClick={handleToggle}
          >
            인증 하기!
          </button>
        ) : (
          <button className="btn btn-disabled w-full cursor-default rounded-lg text-base">
            인증 시간이 아닙니다
          </button>
        )}
      </div>
    </>
  );
};

export default RoomRoutine;
