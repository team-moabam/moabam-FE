import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useBottomSheet } from '@/shared/BottomSheet';
import { RoutineList, RoutineItem } from '@/shared/RoutineList';
import { FormCertificationImage } from '../types/type';
import checkCertifyTime from '../utils/checkCertifyTime';
import CertificationBottomSheet from './CertificationBottomSheet';
import { DateRoomDetailContext } from './RoomDetailProvider';

interface RoomRoutineProps {
  routines: { routineId: number; content: string }[];
  myCertificationImage?: { routineId: number; image: string }[];
  certifyTime: number;
  certifiedDates: string[];
}

const RoomRoutine = ({
  routines,
  myCertificationImage,
  certifiedDates,
  certifyTime
}: RoomRoutineProps) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const form = useForm<FormCertificationImage[]>({
    mode: 'onSubmit',
    defaultValues: myCertificationImage?.map(() => ({
      file: null
    }))
  });

  const { chooseDate, serverTime } = useContext(DateRoomDetailContext);

  const chooseDateString = `${chooseDate.getFullYear()}-${
    chooseDate.getMonth() + 1
  }-${chooseDate.getDate() < 10 ? 0 : ''}${chooseDate.getDate()}`;

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
        {certifiedDates.includes(chooseDateString) ? (
          <span className="text-light-point dark:text-dark-point">
            인증 성공
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="rounded-lg bg-light-sub px-[1.31rem] py-4 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05)] dark:bg-dark-sub ">
        <div className="mb-[1.31rem] text-dark-gray">
          <span className="mr-2">
            {certifyTime}:00{certifyTime < 12 ? 'AM' : 'PM'}
          </span>
          <span>
            ({certifyTime}:00 ~ {certifyTime}:10)
          </span>
        </div>
        <RoutineList className="mb-8">
          {routines.map(({ routineId, content }) => (
            <RoutineItem
              key={routineId}
              contents={content}
              completed={true}
            />
          ))}
        </RoutineList>

        {checkCertifyTime(certifyTime, serverTime) &&
        myCertificationImage &&
        myCertificationImage.length > 0 ? (
          <button
            className="btn btn-light-point dark:btn-dark-point w-full rounded-lg text-base"
            onClick={handleToggle}
          >
            인증 하기!
          </button>
        ) : checkCertifyTime(certifyTime, serverTime) &&
          !myCertificationImage ? (
          <button
            className="btn btn-light-point dark:btn-dark-point w-full rounded-lg text-base"
            onClick={handleToggle}
          >
            인증 완료
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
