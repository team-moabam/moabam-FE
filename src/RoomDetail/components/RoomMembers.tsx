import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouteData } from '@/core/hooks';
import notificationAPI from '@/core/api/functions/notificationAPI';
import { RankMember } from '@/core/types/Member';
import { Avatar } from '@/shared/Avatar';
import { Icon } from '@/shared/Icon';
import { useBottomSheet } from '@/shared/BottomSheet';
import { Toast } from '@/shared/Toast';
import ReportBottomSheet from './ReportBottomSheet';

interface RoomMembers {
  members: RankMember[];
  reportStatus: boolean;
  changeReportStatus: (value: boolean) => void;
}

const RoomMembers = ({
  members,
  reportStatus,
  changeReportStatus
}: RoomMembers) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const [{ nickname, reportedId }, setSelectUserInfo] = useState({
    nickname: '',
    reportedId: ''
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

  const {
    params: { roomId }
  } = useRouteData();

  const handlePokeButtonClick = async (memberId: string, nickname: string) => {
    const { status } = await notificationAPI.getMemberPoke(
      roomId || '',
      memberId
    );

    if (status === 200) {
      Toast.show({
        status: 'confirm',
        message: `${nickname}을 콕! 찔렀어요`,
        icon: true,
        subText: '콕콕'
      });
    }
  };

  const changeCheckedInput = (state: string) => {
    setChecked(state);
  };

  const handleReportButtonClick = (nickname: string, memberId: string) => {
    form.clearErrors();
    setChecked('');
    setSelectUserInfo({ nickname, reportedId: memberId });
    toggle();
  };

  return (
    <>
      <div className="mt-[2.87rem]">
        {members.map(
          ({
            memberId,
            nickname,
            profileImage,
            contributionPoint,
            rank,
            isNotificationSent
          }) => (
            <div
              key={memberId}
              className="mb-[1.19rem] flex items-center justify-between"
            >
              <Avatar
                imgUrl={profileImage}
                userId={memberId}
                nickname={nickname}
                contribution={contributionPoint}
              />
              {reportStatus ? (
                <button
                  onClick={() => handleReportButtonClick(nickname, memberId)}
                  className="btn btn-danger flex h-[1.875rem] w-[4.37rem] items-center rounded-lg p-0  px-[0.56rem] font-IMHyemin-bold text-sm"
                >
                  신고하기
                </button>
              ) : rank < 500 ? (
                <span
                  key={memberId}
                  className="block h-[1.875rem] w-[4.37rem] text-center text-sm text-light-point dark:text-dark-point"
                >
                  루틴 완료!
                </span>
              ) : isNotificationSent ? (
                <button
                  key={memberId}
                  className="btn dark:btn-dark-point btn-light-point flex h-[1.875rem] w-[4.37rem] items-center rounded-lg p-0  px-[0.56rem] font-IMHyemin-bold text-sm"
                  onClick={() => handlePokeButtonClick(memberId, nickname)}
                >
                  <Icon
                    icon="BiSolidHandRight"
                    size="lg"
                    className="mr-[0.7rem]"
                  />
                  콕!
                </button>
              ) : (
                <button
                  key={memberId}
                  className="btn btn-disabled h-[1.875rem] w-[4.37rem] cursor-default rounded-lg p-0 font-IMHyemin-bold text-sm"
                >
                  내일 다시
                </button>
              )}
            </div>
          )
        )}
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
