import { useRouteData } from '@/core/hooks';
import roomAPI from '@/core/api/functions/roomAPI';
import { Avatar } from '@/shared/Avatar';
import { Icon } from '@/shared/Icon';
import { Toast } from '@/shared/Toast';
import { RankMember } from '@/core/types/Member';

interface RoomMembers {
  members: RankMember[];
}

const RoomMembers = ({ members }: RoomMembers) => {
  const {
    params: { roomId }
  } = useRouteData();

  const handlePokeButtonClick = async (memberId: string, nickname: string) => {
    const { status } = await roomAPI.getMemberPoke(roomId || '', memberId);

    if (status === 200) {
      Toast.show({
        status: 'confirm',
        message: `${nickname}을 콕! 찔렀어요`,
        icon: true,
        subText: '콕콕'
      });
    }
  };

  return (
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
            {ButtonContent(rank, isNotificationSent, memberId, nickname)}
          </div>
        )
      )}
    </div>
  );
};

 const ButtonContent = (
    rank: number,
    isNotificationSent: boolean,
    memberId: string,
    nickname: string
  ) => {
    if (rank < 500) {
      return (
        <span className="block h-[1.875rem] w-[4.37rem] text-center text-sm text-light-point dark:text-dark-point">
          루틴 완료!
        </span>
      );
    }

    if (isNotificationSent) {
      return (
        <button
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
      );
    }

    return (
      <button className="btn btn-disabled h-[1.875rem] w-[4.37rem] cursor-default rounded-lg p-0 font-IMHyemin-bold text-sm">
        내일 다시
      </button>
    );
  };

export default RoomMembers;
