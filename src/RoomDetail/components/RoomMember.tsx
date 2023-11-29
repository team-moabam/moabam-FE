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
}

const RoomMember = ({
  member,
  reportStatus,
  handleReportButtonClick
}: RoomMemberProps) => {
  const {
    memberId,
    nickname,
    isNotificationSent,
    profileImage,
    contributionPoint,
    rank
  } = member;
  const [myUserId] = useLocalStorage('MEMBER_ID', null);
  const [noticeSent, setNoticeSent] = useState(isNotificationSent);

  const queryClient = useQueryClient();

  const {
    params: { roomId }
  } = useRouteData();

  const handlePokeButtonClick = async (memberId: number, nickname: string) => {
    await notificationAPI.getMemberPoke(roomId || '', memberId);

    setNoticeSent(true);
    Toast.show({
      status: 'confirm',
      message: `${nickname}을 콕! 찔렀어요`,
      icon: true,
      subText: '콕콕'
    });

    queryClient.invalidateQueries({
      queryKey: roomOptions.detail(roomId || '').queryKey
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
          ) : rank < 500 ? (
            <span
              key={memberId}
              className="block h-[1.875rem] w-[4.37rem] text-center text-sm text-light-point dark:text-dark-point"
            >
              루틴 완료!
            </span>
          ) : noticeSent ? (
            <button
              key={memberId}
              className="btn btn-disabled h-[1.875rem] w-[4.37rem] cursor-default rounded-lg p-0 font-IMHyemin-bold text-sm"
            >
              내일 다시
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
