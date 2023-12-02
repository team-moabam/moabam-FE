import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useLocalStorage, useRouteData } from '@/core/hooks';
import notificationAPI from '@/core/api/functions/notificationAPI';
import { RankMember } from '@/core/types/Member';
import { roomOptions } from '@/core/api/options';
import { Avatar } from '@/shared/Avatar';
import { Icon } from '@/shared/Icon';
import { Toast } from '@/shared/Toast';

interface RoomMemberProps {
  member: RankMember;
  reportStatus: boolean;
  handleReportButtonClick: (nickname: string, memberId: number | null) => void;
  managerNickName: string;
}

const RoomMember = ({
  member,
  reportStatus,
  handleReportButtonClick,
  managerNickName
}: RoomMemberProps) => {
  const {
    memberId,
    nickname,
    isNotificationSent,
    profileImage,
    contributionPoint,
    certificationImage
  } = member;
  const [myUserId] = useLocalStorage('MEMBER_ID', null);
  const [noticeSent, setNoticeSent] = useState(isNotificationSent);

  const queryClient = useQueryClient();

  const {
    params: { roomId }
  } = useRouteData();

  const handlePokeButtonClick = async (memberId: number, nickname: string) => {
    await notificationAPI
      .getMemberPoke(roomId || '', memberId)
      .then(() => {
        setNoticeSent(true);
        Toast.show({
          status: 'confirm',
          message: `${nickname}을 콕! 찔렀어요`,
          icon: true,
          subText: '(12시간 후 다시 콕찌르기 가능)'
        });
        queryClient.invalidateQueries({
          queryKey: roomOptions.detail(roomId || '').queryKey
        });
      })
      .catch((err) => {
        Toast.show({
          status: 'danger',
          message: err.response?.data.message ?? '오류가 발생했어요.'
        });
      });
  };

  return (
    <div
      key={memberId}
      className="mb-[1.19rem] flex items-center justify-between"
    >
      <Avatar
        imgUrl={profileImage}
        userId={memberId}
        nickname={nickname}
        contribution={contributionPoint}
        manager={managerNickName === nickname}
        certified={certificationImage?.images.length > 0}
      />
      {myUserId !== memberId && (
        <>
          {reportStatus ? (
            <button
              onClick={() => handleReportButtonClick(nickname, memberId)}
              className="btn btn-danger flex h-[1.875rem] w-[4.37rem] items-center rounded-lg p-0  px-[0.56rem] font-IMHyemin-bold text-sm"
            >
              신고하기
            </button>
          ) : noticeSent ? (
            <button
              key={memberId}
              className="btn btn-disabled h-[1.875rem] w-[4.37rem] cursor-default rounded-lg p-0 font-IMHyemin-bold text-sm"
            >
              콕! 완료
            </button>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};

export default RoomMember;
