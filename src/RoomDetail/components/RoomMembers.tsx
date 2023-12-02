import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RankMember } from '@/core/types/Member';
import { useBottomSheet } from '@/shared/BottomSheet';
import { Icon } from '@/shared/Icon';
import ReportBottomSheet from './ReportBottomSheet';
import RoomMember from './RoomMember';

interface RoomMembers {
  members: RankMember[];
  reportStatus: boolean;
  changeReportStatus: (value: boolean) => void;
  managerNickName: string;
  maxUserCount: number;
  currentUserCount: number;
}

const RoomMembers = ({
  members,
  reportStatus,
  changeReportStatus,
  managerNickName,
  maxUserCount,
  currentUserCount
}: RoomMembers) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const [{ nickname, reportedId }, setSelectUserInfo] = useState<{
    nickname: string;
    reportedId: null | number;
  }>({
    nickname: '',
    reportedId: null
  });
  const form = useForm<{
    [key: string]: boolean;
  }>({
    mode: 'onSubmit',
    defaultValues: {
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false
    }
  });
  const [checked, setChecked] = useState('');

  const changeCheckedInput = (state: string) => {
    setChecked(state);
  };

  const handleReportButtonClick = (
    nickname: string,
    memberId: number | null
  ) => {
    form.clearErrors();
    setChecked('');
    setSelectUserInfo({ nickname, reportedId: memberId });
    toggle();
  };

  return (
    <>
      <div className="mt-[2.87rem]">
        <div className="mb-[1.19rem] flex justify-between">
          <div className="flex items-center">
            <div className="mr-[0.38rem] flex h-4 w-4 items-center justify-center rounded-full bg-light-point dark:bg-dark-point">
              <Icon
                icon="FaCheck"
                size="xs"
                className="relative top-[1px] text-[0.8rem] text-white"
              />
            </div>
            <span className="text-sm text-light-point dark:text-dark-point">
              오늘 루틴 완료자
            </span>
          </div>
          <div className="flex items-center">
            <Icon
              icon="LuUsers"
              size="sm"
              className="mr-[0.4rem]"
            />
            {currentUserCount} / {maxUserCount}
          </div>
        </div>
        {members.map((member) => (
          <RoomMember
            member={member}
            key={member.memberId}
            reportStatus={reportStatus}
            handleReportButtonClick={handleReportButtonClick}
            managerNickName={managerNickName}
          />
        ))}
      </div>
      <FormProvider {...form}>
        <ReportBottomSheet
          bottomSheetProps={bottomSheetProps}
          close={close}
          nickname={nickname}
          reportedId={reportedId}
          changeCheckedInput={changeCheckedInput}
          checked={checked}
          changeReportStatus={changeReportStatus}
        />
      </FormProvider>
    </>
  );
};

export default RoomMembers;
