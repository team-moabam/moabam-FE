import { useSuspenseQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import KickButton from './KickButton';
import { Avatar } from '@/shared/Avatar';

interface MemberTabProps {
  roomId: string;
}

const MemberTab = ({ roomId }: MemberTabProps) => {
  const { data: room } = useSuspenseQuery({
    ...roomOptions.detail(roomId),
    staleTime: Infinity
  });

  return (
    <div className="flex flex-col gap-4">
      {room.todayCertificateRank.map((member) => (
        <div
          className="flex items-center justify-between"
          key={member.memberId}
        >
          <Avatar
            imgUrl={member.profileImage}
            nickname={member.nickname}
            userId={member.memberId}
            contribution={member.contributionPoint}
          />
          <div className="flex gap-2">
            <KickButton />
            <button className="btn btn-light-point dark:btn-dark-point rounded-2xl px-3 py-1">
              방장 위임
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberTab;
