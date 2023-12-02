import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RankMember } from '@/core/types/Member';
import { useBottomSheet } from '@/shared/BottomSheet';
import ReportBottomSheet from './ReportBottomSheet';
import RoomMember from './RoomMember';

interface RoomMembers {
  members: RankMember[];
  reportStatus: boolean;
  changeReportStatus: (value: boolean) => void;
  managerNickName: string;
}

const RoomMembers = ({
  members,
  reportStatus,
  changeReportStatus,
  managerNickName
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
