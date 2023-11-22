import { useState } from 'react';
import ReportBottomSheet from './ReportBottomSheet';
import { Avatar } from '@/shared/Avatar';
import { Icon } from '@/shared/Icon';
import { useBottomSheet } from '@/shared/BottomSheet';
import { RankMember } from '@/core/types/Member';

interface RoomMembers {
  members: RankMember[];
  reportStatus: boolean;
}

const RoomMembers = ({ members, reportStatus }: RoomMembers) => {
  const { bottomSheetProps, toggle, close } = useBottomSheet();
  const [chooseUserInfo, setSelectUserInfo] = useState({
    nickname: '',
    reportedId: ''
  });

  const { nickname, reportedId } = chooseUserInfo;

  return (
    <>
      <div className="mt-[2.87rem]">
        {members.map(
          ({ memberId, nickname, profileImage, contributionPoint }) => (
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
                  onClick={() => {
                    setSelectUserInfo({ nickname, reportedId: memberId });
                    toggle();
                  }}
                  className="btn btn-danger flex h-[1.875rem] w-[4.37rem] items-center rounded-lg p-0  px-[0.56rem] font-IMHyemin-bold text-sm"
                >
                  신고하기
                </button>
              ) : (
                <button className="btn dark:btn-dark-point btn-light-point flex h-[1.875rem] w-[4.37rem] items-center rounded-lg p-0  px-[0.56rem] font-IMHyemin-bold text-sm">
                  <Icon
                    icon="BiSolidHandRight"
                    size="lg"
                    className="mr-[0.7rem]"
                  />
                  콕!
                </button>
              )}
            </div>
          )
        )}
      </div>
      <ReportBottomSheet
        bottomSheetProps={bottomSheetProps}
        close={close}
        nickname={nickname}
        reportedId={reportedId}
      />
    </>
  );
};

export default RoomMembers;
