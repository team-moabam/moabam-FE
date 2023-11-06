import ImageList from './ImageList';
import { BottomSheet, useBottomSheet } from '@/shared/BottomSheet';
import { RoutineList, RoutineItem } from '@/shared/RoutineList';

const RoomRoutine = () => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();

  return (
    <>
      {
        <BottomSheet {...bottomSheetProps}>
          <div className="mx-[1.81rem] mb-[1.88rem] mt-[1.69rem] text-white">
            <h1 className="text-white">모든 칸을 채워주세요</h1>
            <ImageList />
            <span className="mb-[3.44rem] block text-[0.75rem]">
              다른 새들이 알아볼 수 있게 찍어주세요!
            </span>
            <button
              className="btn dark:btn-dark-point btn-light-point w-full"
              onClick={close}
            >
              인증!
            </button>
          </div>
        </BottomSheet>
      }
      <div className="mb-[0.88rem] flex justify-between text-base">
        <h4 className="text-black dark:text-white">개인 인증</h4>
        <span className="text-dark-gray">아직이예여</span>
      </div>
      <div className="rounded-[0.5rem] bg-light-sub px-[1.31rem] py-[1rem] shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05)] dark:bg-dark-sub ">
        <span className="mb-[1.31rem] block text-dark-gray">17:00~17:10</span>
        <RoutineList className="mb-[2rem]">
          <RoutineItem
            contents="책 읽기"
            completed={false}
          />
          <RoutineItem
            contents="책 읽기"
            completed={false}
          />
          <RoutineItem
            contents="책 읽기"
            completed={false}
          />
        </RoutineList>
        <button
          className="btn btn-light-point dark:btn-dark-point w-full rounded-[0.5rem] text-base"
          onClick={toggle}
        >
          인증 하기!
        </button>
      </div>
    </>
  );
};

export default RoomRoutine;
