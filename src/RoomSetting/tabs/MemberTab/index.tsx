import { useSuspenseQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import KickButton from './KickButton';
import DelegationButton from './DelegationButton';
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
      {room.participants.map((member) => (
        <div
          className="flex items-center justify-between"
          key={member.memberId}
        >
          <Avatar
            imgUrl={member.profileImage}
            nickname={member.nickname}
            userId={member.memberId.toString()}
            contribution={member.contributionPoint}
          />
          <div className="flex gap-2">
            <KickButton
              {...member}
              memberId={member.memberId.toString()}
              roomId={roomId}
            />
            <DelegationButton
              {...member}
              memberId={member.memberId.toString()}
              roomId={roomId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberTab;
