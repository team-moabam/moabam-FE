import { useSuspenseQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { Avatar } from '@/shared/Avatar';
import KickButton from './KickButton';
import DelegationButton from './DelegationButton';

interface MemberTabProps {
  roomId: string;
}

const MemberTab = ({ roomId }: MemberTabProps) => {
  const { data: room } = useSuspenseQuery({
    ...roomOptions.detail(roomId),
    select: (data) => ({
      ...data,
      participants: data.participants.sort((a, b) =>
        a.memberId === data.managerId ? -1 : 1
      )
    }),
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
            userId={member.memberId}
            contribution={member.contributionPoint}
          />
          {member.memberId !== room.managerId && (
            <div className="flex gap-2">
              <KickButton
                {...member}
                memberId={member.memberId}
                roomId={roomId}
              />
              <DelegationButton
                {...member}
                memberId={member.memberId}
                roomId={roomId}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MemberTab;
