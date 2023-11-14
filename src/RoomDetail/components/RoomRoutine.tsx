import { FormProvider, useForm } from 'react-hook-form';
import { FormCertificationImage } from '../types/type';
import CertificationBottomSheet from './CertificationBottomSheet';
import { useBottomSheet } from '@/shared/BottomSheet';
import { RoutineList, RoutineItem } from '@/shared/RoutineList';

const certificationImage = [
  {
    routineId: 5,
    // image: 'https://picsum.photos/200'
    image: null
  },
  {
    routineId: 9,
    // image: 'https://picsum.photos/200'
    image: null
  }
];

interface RoomRoutineProps {
  routines: { routineId: number; content: string }[];
}

const RoomRoutine = ({ routines }: RoomRoutineProps) => {
  const defaultData = certificationImage.map(() => {
    return {
      file: null
    };
  });

  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const methods = useForm<FormCertificationImage[]>({
    mode: 'onSubmit',
    defaultValues: defaultData
  });

  const handleToggle = () => {
    methods.clearErrors();
    toggle();
  };

  return (
    <>
      <FormProvider {...methods}>
        <CertificationBottomSheet
          bottomSheetProps={bottomSheetProps}
          close={close}
        />
      </FormProvider>
      <div className="mb-[0.88rem] flex justify-between text-base">
        <h4 className="text-black dark:text-white">개인 인증</h4>
        <span className="text-dark-gray">아직이예여</span>
      </div>
      <div className="rounded-s-lg bg-light-sub px-[1.31rem] py-4 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05)] dark:bg-dark-sub ">
        <span className="mb-[1.31rem] block text-dark-gray">17:00~17:10</span>
        <RoutineList className="mb-8">
          {routines.map(({ routineId, content }) => (
            <RoutineItem
              key={routineId}
              contents={content}
              completed={false}
            />
          ))}
        </RoutineList>
        <button
          className="btn btn-light-point dark:btn-dark-point w-full rounded-lg text-base"
          onClick={handleToggle}
        >
          인증 하기!
        </button>
      </div>
    </>
  );
};

export default RoomRoutine;
